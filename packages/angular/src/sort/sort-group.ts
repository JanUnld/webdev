import {
  Directive,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SortModel, SortModelChange, SortState } from './sort-model';
import { SortOrder } from '@janunld/stdlib';
import { SortParamParser } from './sort-param-parser';

export type SortGroupOptions = Partial<Pick<SortGroup, 'emitInitChange' | 'allowsMultiple' | 'preferredOrder'>>;

export const SORT_GROUP_OPTIONS = new InjectionToken<SortGroupOptions>('SORT_GROUP_OPTIONS');

@Directive({
  exportAs: 'sortGroup',
  selector: '[sortGroup]',
  providers: [SortModel],
  inputs: [
    '_initValue: sortGroup',
    'emitInitChange: sortGroupEmitInitChange',
    'allowsMultiple: sortGroupAllowsMultiple',
    'preferredOrder: sortGroupPreferredOrder',
  ],
  outputs: ['changes: sortGroupChanges'],
})
export class SortGroup implements OnInit, OnDestroy {
  private _emitInitEvent = false;

  protected readonly ngDestroys = new Subject<void>();
  protected initValues: Array<SortState | string> = [];

  @Input()
  private set _initValue(value: Array<SortState | string> | SortState | string) {
    if (Array.isArray(value)) {
      this.initValues = value;
    } else if (value != null) {
      this.initValues = [value];
    }
  }

  @Input()
  set emitInitChange(value: boolean | string) {
    this._emitInitEvent = value !== 'false' && !!value;
  }

  get emitInitChange(): boolean {
    return this._emitInitEvent;
  }

  @Input()
  set allowsMultiple(value: boolean | string) {
    this.model.allowsMultiple = value !== 'false' && !!value;
  }

  get allowsMultiple(): boolean {
    return this.model.allowsMultiple;
  }

  @Input() preferredOrder: SortOrder = 'ascending';

  @Output() readonly changes = new EventEmitter<SortModelChange>();

  constructor(
    readonly model: SortModel,
    protected paramParser: SortParamParser,
    @Optional() @Inject(SORT_GROUP_OPTIONS) options?: SortGroupOptions
  ) {
    model.changes.pipe(takeUntil(this.ngDestroys)).subscribe(this.changes);

    if (options) {
      this.emitInitChange = options.emitInitChange ?? this.emitInitChange;
      this.allowsMultiple = options.allowsMultiple ?? this.allowsMultiple;
      this.preferredOrder = options.preferredOrder ?? this.preferredOrder;
    }
  }

  ngOnInit(): void {
    if (this.initValues != null) {
      for (const stateOrParam of this.initValues) {
        const state =
          typeof stateOrParam === 'string'
            ? this.paramParser.parseParam(stateOrParam, this.preferredOrder)
            : stateOrParam;
        if (state) {
          this.model.set(state.key, state.order || this.preferredOrder, {
            emitChange: this._emitInitEvent,
          });
        }
      }
    }
  }

  ngOnDestroy(): void {
    this.ngDestroys.next();
    this.ngDestroys.complete();
  }
}
