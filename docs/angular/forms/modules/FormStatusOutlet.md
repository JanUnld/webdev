[@janunld/angular/forms](../README.md) / [Exports](../modules.md) / FormStatusOutlet

# Module: FormStatusOutlet

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

## Table of contents

### Classes

- [FormStatusOutlet](../classes/FormStatusOutlet.FormStatusOutlet.md)
- [FormStatusOutletModule](../classes/FormStatusOutlet.FormStatusOutletModule.md)
- [FormStatusPendingDef](../classes/FormStatusOutlet.FormStatusPendingDef.md)
- [FormStatusValidDef](../classes/FormStatusOutlet.FormStatusValidDef.md)

### Interfaces

- [FormErrorMessages](../interfaces/FormStatusOutlet.FormErrorMessages.md)

### Type Aliases

- [FormErrorMessageFactory](FormStatusOutlet.md#formerrormessagefactory)

### Variables

- [FORM_ERROR_CODE](FormStatusOutlet.md#form_error_code)
- [FORM_ERROR_COMPONENT](FormStatusOutlet.md#form_error_component)
- [FORM_ERROR_MESSAGE](FormStatusOutlet.md#form_error_message)
- [FORM_ERROR_MESSAGES](FormStatusOutlet.md#form_error_messages)
- [FORM_ERROR_PARAMS](FormStatusOutlet.md#form_error_params)
- [FORM_PENDING_COMPONENT](FormStatusOutlet.md#form_pending_component)
- [FORM_VALID_COMPONENT](FormStatusOutlet.md#form_valid_component)

### Functions

- [provideFormErrorComponent](FormStatusOutlet.md#provideformerrorcomponent)
- [provideFormErrorMessages](FormStatusOutlet.md#provideformerrormessages)
- [provideFormPendingComponent](FormStatusOutlet.md#provideformpendingcomponent)
- [provideFormValidComponent](FormStatusOutlet.md#provideformvalidcomponent)

## Type Aliases

### FormErrorMessageFactory

**FormErrorMessageFactory**: (`params`: `any`) => `string`

#### Type declaration

(`params`): `string`

##### Parameters

| Name     | Type  |
| :------- | :---- |
| `params` | `any` |

##### Returns

`string`

## Variables

### FORM_ERROR_CODE

`Const` **FORM_ERROR_CODE**: `InjectionToken`<`string`\>

---

### FORM_ERROR_COMPONENT

`Const` **FORM_ERROR_COMPONENT**: `InjectionToken`<`any`\>

Refers to a component type that is used as container for error cases within
the [FormStatusOutlet](../classes/FormStatusOutlet.FormStatusOutlet.md). The component implementation may inject various
context values, such as [FORM_ERROR_CODE](FormStatusOutlet.md#form_error_code), [FORM_ERROR_PARAMS](FormStatusOutlet.md#form_error_params)
and [FORM_ERROR_MESSAGE](FormStatusOutlet.md#form_error_message).

---

### FORM_ERROR_MESSAGE

`Const` **FORM_ERROR_MESSAGE**: `InjectionToken`<`string`\>

---

### FORM_ERROR_MESSAGES

`Const` **FORM_ERROR_MESSAGES**: `InjectionToken`<[`FormErrorMessages`](../interfaces/FormStatusOutlet.FormErrorMessages.md)\>

---

### FORM_ERROR_PARAMS

`Const` **FORM_ERROR_PARAMS**: `InjectionToken`<`any`\>

---

### FORM_PENDING_COMPONENT

`Const` **FORM_PENDING_COMPONENT**: `InjectionToken`<`any`\>

---

### FORM_VALID_COMPONENT

`Const` **FORM_VALID_COMPONENT**: `InjectionToken`<`any`\>

## Functions

### provideFormErrorComponent

**provideFormErrorComponent**(`type`): `Provider`

#### Parameters

| Name   | Type           |
| :----- | :------------- |
| `type` | `Type`<`any`\> |

#### Returns

`Provider`

---

### provideFormErrorMessages

**provideFormErrorMessages**(`messages`): `Object`

#### Parameters

| Name       | Type                                                                       |
| :--------- | :------------------------------------------------------------------------- |
| `messages` | [`FormErrorMessages`](../interfaces/FormStatusOutlet.FormErrorMessages.md) |

#### Returns

`Object`

| Name       | Type                                                                                          |
| :--------- | :-------------------------------------------------------------------------------------------- |
| `provide`  | `InjectionToken`<[`FormErrorMessages`](../interfaces/FormStatusOutlet.FormErrorMessages.md)\> |
| `useValue` | [`FormErrorMessages`](../interfaces/FormStatusOutlet.FormErrorMessages.md)                    |

---

### provideFormPendingComponent

**provideFormPendingComponent**(`type`): `Provider`

#### Parameters

| Name   | Type           |
| :----- | :------------- |
| `type` | `Type`<`any`\> |

#### Returns

`Provider`

---

### provideFormValidComponent

**provideFormValidComponent**(`type`): `Provider`

#### Parameters

| Name   | Type           |
| :----- | :------------- |
| `type` | `Type`<`any`\> |

#### Returns

`Provider`
