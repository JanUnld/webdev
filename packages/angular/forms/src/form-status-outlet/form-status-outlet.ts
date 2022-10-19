import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  inject,
  Inject,
  InjectionToken,
  Injector,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { AbstractControl, NgControl, ValidationErrors } from '@angular/forms';
import { EMPTY, Observable, Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, filter, mapTo, takeUntil, tap } from 'rxjs/operators';
import { FormStatusPendingDef } from './form-status-pending-def';
import { FormStatusValidDef } from './form-status-valid-def';
import { extractValidationErrors } from '../utils';
import {
  FORM_ERROR_COMPONENT,
  FORM_ERROR_MESSAGES,
  FORM_PENDING_COMPONENT,
  FORM_VALID_COMPONENT,
  FormErrorMessages,
} from './di';

/* eslint-disable @typescript-eslint/no-non-null-assertion*/

/** @internal */
export const FORM_PENDING_TEMPLATE = new InjectionToken<TemplateRef<any>>('FORM_PENDING_TEMPLATE', {
  factory: () => inject(FormStatusOutlet).pendingDef!.template,
});
/** @internal */
export const FORM_VALID_TEMPLATE = new InjectionToken<TemplateRef<any>>('FORM_VALID_TEMPLATE', {
  factory: () => inject(FormStatusOutlet).validDef!.template,
});

export const FORM_ERROR_CODE = new InjectionToken<string>('FORM_ERROR_CODE', {
  factory: () => inject(FormStatusOutlet).selectedError![0],
});

export const FORM_ERROR_PARAMS = new InjectionToken<any>('FORM_ERROR_PARAMS', {
  factory: () => inject(FormStatusOutlet).selectedError![1],
});

export const FORM_ERROR_MESSAGE = new InjectionToken<string>('FORM_ERROR_MESSAGE', {
  factory: () => inject(FormStatusOutlet).selectedErrorMessage!,
});

/* eslint-enable @typescript-eslint/no-non-null-assertion*/

/**
 * Outlet component taking care of any {@link AbstractControl} status (including
 * pending validations). Error messages may be provided on each individual di
 * (dependency injection) layer.
 *
 * ```typescript
 * provideFormErrorMessages({
 *   required: () => 'Required: Please enter a value',
 * });
 * ```
 *
 * ```html
 * <form [formGroup]="formGroup">
 *   <input type="text" formControlName="foo" />
 *
 *   <form-status-outlet formControlName="foo"></form-status-outlet>
 *   <!-- or -->
 *   <form-status-outlet formControlName="foo">
 *     <ng-template formStatusPendingDef>Looking for any existing foos...</ng-template>
 *     <ng-template formStatusValidDef>Foo is available!</ng-template>
 *   </form-status-outlet>
 * </form>
 * ```
 */
@Component({
  selector: 'form-status-outlet',
  styles: ['form-status-outlet { display: block }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container *ngIf="!!control && (!waitForTouch || control.touched)">
      <ng-container *ngIf="control.status === 'PENDING'; else invalidOrValidTemplate">
        <ng-container *ngIf="!!pendingComponent">
          <ng-container *ngComponentOutlet="pendingComponent"></ng-container>
        </ng-container>
        <ng-template #pendingTemplate>
          <ng-container *ngTemplateOutlet="pendingDef?.template ?? null"></ng-container>
        </ng-template>
      </ng-container>
      <ng-template #invalidOrValidTemplate>
        <ng-container *ngIf="control.status === 'INVALID'; else validTemplate">
          <ng-container *ngIf="!!errorComponent; else messageTemplate">
            <ng-container *ngComponentOutlet="errorComponent"></ng-container>
          </ng-container>
          <ng-template #messageTemplate>{{ selectedErrorMessage }}</ng-template>
        </ng-container>
        <ng-template #validTemplate>
          <ng-container *ngIf="!!validComponent; else validDefTemplate">
            <ng-container *ngComponentOutlet="validComponent"></ng-container>
          </ng-container>
          <ng-template #validDefTemplate>
            <ng-container *ngTemplateOutlet="validDef?.template ?? null"></ng-container>
          </ng-template>
        </ng-template>
      </ng-template>
    </ng-container>
  `,
})
export class FormStatusOutlet implements OnChanges, OnInit, OnDestroy {
  private _validationErrors: ValidationErrors | null = null;
  private _control: AbstractControl | null = null;
  private _pendingSub: Subscription | null = null;
  private _invalidSub: Subscription | null = null;
  private _validSub: Subscription | null = null;
  private _waitForTouch = true;

  @ContentChild(FormStatusPendingDef, { static: true }) private _staticPendingDef?: FormStatusPendingDef;
  @ContentChild(FormStatusPendingDef, { static: false }) private _dynamicPendingDef?: FormStatusPendingDef;
  @ContentChild(FormStatusValidDef, { static: true }) private _staticValidDef?: FormStatusValidDef;
  @ContentChild(FormStatusValidDef, { static: false }) private _dynamicValidDef?: FormStatusValidDef;

  protected readonly ngDestroys = new Subject<void>();

  get pendingDef(): FormStatusPendingDef | null {
    return (this._staticPendingDef || this._dynamicPendingDef) ?? null;
  }
  get validDef(): FormStatusValidDef | null {
    return (this._staticValidDef || this._dynamicValidDef) ?? null;
  }

  /**
   * Gets or sets the index number or error code string in case of multiple
   * matches from different di (dependency injection) layers
   */
  @Input() select: string | number = 0;

  @Input()
  set control(value: AbstractControl | null) {
    this._control = value;
  }
  get control(): AbstractControl | null {
    return (this._control || this.ngControl?.control) ?? null;
  }

  @Input()
  set waitForTouch(value: boolean | string) {
    this._waitForTouch = value !== 'false' && !!value;
  }
  get waitForTouch(): boolean {
    return this._waitForTouch;
  }

  get validationErrors(): ValidationErrors | null {
    return this.control && extractValidationErrors(this.control);
  }

  get selectedError(): [string, unknown] | null {
    if (this.validationErrors == null) {
      return null;
    }

    const entries = Object.entries(this.validationErrors);
    if (typeof this.select === 'string') {
      return entries.find(([code]) => code === this.select) ?? null;
    } else {
      return entries[this.select];
    }
  }
  get selectedErrorMessage(): string | null {
    if (this.selectedError == null) {
      return null;
    }

    const [errorCode, params] = this.selectedError;
    const errorMessageOrFactory = this.errorMessages[errorCode];
    return typeof errorMessageOrFactory === 'function' ? errorMessageOrFactory(params) : errorMessageOrFactory;
  }

  constructor(
    protected injector: Injector,
    protected changeDetector: ChangeDetectorRef,
    @Inject(FORM_ERROR_MESSAGES) readonly errorMessages: FormErrorMessages,
    @Optional() @Inject(FORM_ERROR_COMPONENT) readonly errorComponent?: any,
    @Optional() @Inject(FORM_PENDING_COMPONENT) readonly pendingComponent?: any,
    @Optional() @Inject(FORM_VALID_COMPONENT) readonly validComponent?: any,
    @Optional() protected readonly ngControl?: NgControl
  ) {}

  private _invalidateStatusSubs(): void {
    if (this._pendingSub != null && !this._pendingSub?.closed) {
      this._pendingSub.unsubscribe();
    }
    this._pendingSub = this.observeControlStatusChange('PENDING').subscribe();

    if (this._invalidSub != null && !this._invalidSub?.closed) {
      this._invalidSub.unsubscribe();
    }
    this._invalidSub = this.observeControlStatusChange('INVALID').subscribe(
      (control) => (this._validationErrors = extractValidationErrors(control))
    );

    if (this._validSub != null && !this._validSub?.closed) {
      this._validSub.unsubscribe();
    }
    this._validSub = this.observeControlStatusChange('VALID').subscribe(() => (this._validationErrors = null));
  }

  protected observeControlStatusChange(status: 'VALID' | 'PENDING' | 'INVALID'): Observable<AbstractControl> {
    if (this.control == null) {
      return EMPTY;
    } // consider dev mode diagnostics in case no control is given?

    return this.control.statusChanges.pipe(
      takeUntil(this.ngDestroys),
      distinctUntilChanged(),
      filter((s) => s === status),
      tap(() => this.changeDetector.markForCheck()),
      tap(() => this.control?.markAsTouched()),
      mapTo(this.control)
    );
  }

  ngOnChanges() {
    if (this.control != null) {
      this._invalidateStatusSubs();
    }
  }

  ngOnInit() {
    if (this.control != null) {
      this._invalidateStatusSubs();
    }
  }
  ngOnDestroy() {
    this.ngDestroys.next();
    this.ngDestroys.complete();
  }
}
