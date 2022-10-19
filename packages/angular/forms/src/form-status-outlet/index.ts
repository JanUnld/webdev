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
 *
 * @module FormStatusOutlet
 */
export * from './form-status-valid-def';
export * from './form-status-pending-def';
export * from './form-status-outlet';
export * from './module';
export * from './di';
