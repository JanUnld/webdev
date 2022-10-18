[@janunld/angular/forms](../README.md) / [Exports](../modules.md) / StepModel

# Module: StepModel

## Table of contents

### Classes

- [Step](../classes/StepModel.Step.md)
- [StepError](../classes/StepModel.StepError.md)
- [StepModel](../classes/StepModel.StepModel.md)

### Interfaces

- [StepActivateOptions](../interfaces/StepModel.StepActivateOptions.md)
- [StepGuardOptions](../interfaces/StepModel.StepGuardOptions.md)
- [StepOptions](../interfaces/StepModel.StepOptions.md)

### Type Aliases

- [StepCanActivate](StepModel.md#stepcanactivate)
- [StepCanDeactivate](StepModel.md#stepcandeactivate)
- [StepDirection](StepModel.md#stepdirection)
- [StepModelInput](StepModel.md#stepmodelinput)

### Functions

- [resolveStepDirection](StepModel.md#resolvestepdirection)

## Type Aliases

### StepCanActivate

**StepCanActivate**: (`direction`: [`StepDirection`](StepModel.md#stepdirection), `previous?`: [`Step`](../classes/StepModel.Step.md)) => `Promise`<`boolean`\> \| `boolean`

#### Type declaration

(`direction`, `previous?`): `Promise`<`boolean`\> \| `boolean`

##### Parameters

| Name        | Type                                          |
| :---------- | :-------------------------------------------- |
| `direction` | [`StepDirection`](StepModel.md#stepdirection) |
| `previous?` | [`Step`](../classes/StepModel.Step.md)        |

##### Returns

`Promise`<`boolean`\> \| `boolean`

---

### StepCanDeactivate

**StepCanDeactivate**: (`direction`: [`StepDirection`](StepModel.md#stepdirection), `next`: [`Step`](../classes/StepModel.Step.md)) => `Promise`<`boolean`\> \| `boolean`

#### Type declaration

(`direction`, `next`): `Promise`<`boolean`\> \| `boolean`

##### Parameters

| Name        | Type                                          |
| :---------- | :-------------------------------------------- |
| `direction` | [`StepDirection`](StepModel.md#stepdirection) |
| `next`      | [`Step`](../classes/StepModel.Step.md)        |

##### Returns

`Promise`<`boolean`\> \| `boolean`

---

### StepDirection

**StepDirection**: `"forwards"` \| `"backwards"`

---

### StepModelInput

**StepModelInput**: (`string` \| `AbstractControl` \| [`StepOptions`](../interfaces/StepModel.StepOptions.md))[] \| `Record`<`string`, `AbstractControl` \| [`StepOptions`](../interfaces/StepModel.StepOptions.md)\>

## Functions

### resolveStepDirection

**resolveStepDirection**(`previous`, `next`): [`StepDirection`](StepModel.md#stepdirection)

#### Parameters

| Name       | Type                                   |
| :--------- | :------------------------------------- |
| `previous` | [`Step`](../classes/StepModel.Step.md) |
| `next`     | [`Step`](../classes/StepModel.Step.md) |

#### Returns

[`StepDirection`](StepModel.md#stepdirection)
