[@janunld/angular/forms](../README.md) / [Exports](../modules.md) / Utils

# Module: Utils

## Table of contents

### Interfaces

- [ControlCloneOptions](../interfaces/Utils.ControlCloneOptions.md)

### Functions

- [cloneAbstractControl](Utils.md#cloneabstractcontrol)
- [extractValidationErrors](Utils.md#extractvalidationerrors)

## Functions

### cloneAbstractControl

**cloneAbstractControl**<`T`\>(`control`, `options?`): `T`

#### Type parameters

| Name | Type                                          |
| :--- | :-------------------------------------------- |
| `T`  | extends `AbstractControl`<`any`, `any`, `T`\> |

#### Parameters

| Name       | Type                                                                      |
| :--------- | :------------------------------------------------------------------------ |
| `control`  | `NonNullable`<`T`\>                                                       |
| `options?` | [`ControlCloneOptions`](../interfaces/Utils.ControlCloneOptions.md)<`T`\> |

#### Returns

`T`

---

### extractValidationErrors

**extractValidationErrors**(`control`): `ValidationErrors` \| `null`

Extracts all ValidationErrors recursively from the given AbstractControl instance

#### Parameters

| Name      | Type                             |
| :-------- | :------------------------------- |
| `control` | `AbstractControl`<`any`, `any`\> |

#### Returns

`ValidationErrors` \| `null`
