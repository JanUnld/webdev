[@janunld/angular/forms](../README.md) / [Exports](../modules.md) / [FormStatusOutlet](../modules/FormStatusOutlet.md) / FormStatusOutlet

# Class: FormStatusOutlet

[FormStatusOutlet](../modules/FormStatusOutlet.md).FormStatusOutlet

Outlet component taking care of any AbstractControl status (including
pending validations). Error messages may be provided on each individual di
(dependency injection) layer.

```typescript
provideFormErrorMessages({
  required: () => 'Required: Please enter a value',
});
```

```html
<form [formGroup]="formGroup">
  <input type="text" formControlName="foo" />

  <form-status-outlet formControlName="foo"></form-status-outlet>
  <!-- or -->
  <form-status-outlet formControlName="foo">
    <ng-template formStatusPendingDef>Looking for any existing foos...</ng-template>
    <ng-template formStatusValidDef>Foo is available!</ng-template>
  </form-status-outlet>
</form>
```

## Implements

- `OnChanges`
- `OnInit`
- `OnDestroy`

## Table of contents

### Constructors

- [constructor](FormStatusOutlet.FormStatusOutlet.md#constructor)

### Properties

- [errorComponent](FormStatusOutlet.FormStatusOutlet.md#errorcomponent)
- [errorMessages](FormStatusOutlet.FormStatusOutlet.md#errormessages)
- [pendingComponent](FormStatusOutlet.FormStatusOutlet.md#pendingcomponent)
- [select](FormStatusOutlet.FormStatusOutlet.md#select)
- [validComponent](FormStatusOutlet.FormStatusOutlet.md#validcomponent)

### Accessors

- [control](FormStatusOutlet.FormStatusOutlet.md#control)
- [pendingDef](FormStatusOutlet.FormStatusOutlet.md#pendingdef)
- [selectedError](FormStatusOutlet.FormStatusOutlet.md#selectederror)
- [selectedErrorMessage](FormStatusOutlet.FormStatusOutlet.md#selectederrormessage)
- [validDef](FormStatusOutlet.FormStatusOutlet.md#validdef)
- [validationErrors](FormStatusOutlet.FormStatusOutlet.md#validationerrors)
- [waitForTouch](FormStatusOutlet.FormStatusOutlet.md#waitfortouch)

### Methods

- [ngOnChanges](FormStatusOutlet.FormStatusOutlet.md#ngonchanges)
- [ngOnDestroy](FormStatusOutlet.FormStatusOutlet.md#ngondestroy)
- [ngOnInit](FormStatusOutlet.FormStatusOutlet.md#ngoninit)

## Constructors

### constructor

**new FormStatusOutlet**(`injector`, `changeDetector`, `errorMessages`, `errorComponent?`, `pendingComponent?`, `validComponent?`, `ngControl?`)

#### Parameters

| Name                | Type                                                                       |
| :------------------ | :------------------------------------------------------------------------- |
| `injector`          | `Injector`                                                                 |
| `changeDetector`    | `ChangeDetectorRef`                                                        |
| `errorMessages`     | [`FormErrorMessages`](../interfaces/FormStatusOutlet.FormErrorMessages.md) |
| `errorComponent?`   | `any`                                                                      |
| `pendingComponent?` | `any`                                                                      |
| `validComponent?`   | `any`                                                                      |
| `ngControl?`        | `NgControl`                                                                |

## Properties

### errorComponent

`Optional` `Readonly` **errorComponent**: `any`

---

### errorMessages

`Readonly` **errorMessages**: [`FormErrorMessages`](../interfaces/FormStatusOutlet.FormErrorMessages.md)

---

### pendingComponent

`Optional` `Readonly` **pendingComponent**: `any`

---

### select

**select**: `string` \| `number` = `0`

Gets or sets the index number or error code string in case of multiple
matches from different di (dependency injection) layers

---

### validComponent

`Optional` `Readonly` **validComponent**: `any`

## Accessors

### control

`get` **control**(): `null` \| `AbstractControl`<`any`, `any`\>

#### Returns

`null` \| `AbstractControl`<`any`, `any`\>

`set` **control**(`value`): `void`

#### Parameters

| Name    | Type                                       |
| :------ | :----------------------------------------- |
| `value` | `null` \| `AbstractControl`<`any`, `any`\> |

#### Returns

`void`

---

### pendingDef

`get` **pendingDef**(): `null` \| [`FormStatusPendingDef`](FormStatusOutlet.FormStatusPendingDef.md)

#### Returns

`null` \| [`FormStatusPendingDef`](FormStatusOutlet.FormStatusPendingDef.md)

---

### selectedError

`get` **selectedError**(): `null` \| [`string`, `unknown`]

#### Returns

`null` \| [`string`, `unknown`]

---

### selectedErrorMessage

`get` **selectedErrorMessage**(): `null` \| `string`

#### Returns

`null` \| `string`

---

### validDef

`get` **validDef**(): `null` \| [`FormStatusValidDef`](FormStatusOutlet.FormStatusValidDef.md)

#### Returns

`null` \| [`FormStatusValidDef`](FormStatusOutlet.FormStatusValidDef.md)

---

### validationErrors

`get` **validationErrors**(): `null` \| `ValidationErrors`

#### Returns

`null` \| `ValidationErrors`

---

### waitForTouch

`get` **waitForTouch**(): `boolean`

#### Returns

`boolean`

`set` **waitForTouch**(`value`): `void`

#### Parameters

| Name    | Type                  |
| :------ | :-------------------- |
| `value` | `string` \| `boolean` |

#### Returns

`void`

## Methods

### ngOnChanges

**ngOnChanges**(): `void`

#### Returns

`void`

#### Implementation of

OnChanges.ngOnChanges

---

### ngOnDestroy

**ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

---

### ngOnInit

**ngOnInit**(): `void`

#### Returns

`void`

#### Implementation of

OnInit.ngOnInit
