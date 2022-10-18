[@janunld/angular/forms](../README.md) / [Exports](../modules.md) / [StepModel](../modules/StepModel.md) / Step

# Class: Step

[StepModel](../modules/StepModel.md).Step

## Table of contents

### Constructors

- [constructor](StepModel.Step.md#constructor)

### Properties

- [formControl](StepModel.Step.md#formcontrol)
- [ignoreValidity](StepModel.Step.md#ignorevalidity)
- [model](StepModel.Step.md#model)
- [name](StepModel.Step.md#name)

### Accessors

- [done](StepModel.Step.md#done)
- [index](StepModel.Step.md#index)
- [isActive](StepModel.Step.md#isactive)
- [isFirst](StepModel.Step.md#isfirst)
- [isLast](StepModel.Step.md#islast)
- [touched](StepModel.Step.md#touched)
- [undone](StepModel.Step.md#undone)
- [untouched](StepModel.Step.md#untouched)

### Methods

- [activate](StepModel.Step.md#activate)
- [canActivate](StepModel.Step.md#canactivate)
- [canDeactivate](StepModel.Step.md#candeactivate)
- [markAsDone](StepModel.Step.md#markasdone)
- [markAsTouched](StepModel.Step.md#markastouched)
- [markAsUndone](StepModel.Step.md#markasundone)
- [markAsUntouched](StepModel.Step.md#markasuntouched)
- [reset](StepModel.Step.md#reset)

## Constructors

### constructor

**new Step**(`formControlOrOptions`, `model?`)

#### Parameters

| Name                   | Type                                                                                                  |
| :--------------------- | :---------------------------------------------------------------------------------------------------- |
| `formControlOrOptions` | `null` \| `AbstractControl`<`any`, `any`\> \| [`StepOptions`](../interfaces/StepModel.StepOptions.md) |
| `model?`               | [`StepModel`](StepModel.StepModel.md)                                                                 |

## Properties

### formControl

**formControl**: `null` \| `AbstractControl`<`any`, `any`\> = `null`

---

### ignoreValidity

**ignoreValidity**: `boolean` \| [`StepDirection`](../modules/StepModel.md#stepdirection) = `'backwards'`

---

### model

**model**: `null` \| [`StepModel`](StepModel.StepModel.md) = `null`

---

### name

**name**: `null` \| `string` = `null`

## Accessors

### done

`get` **done**(): `boolean`

Gets whether the step is done, meaning it did deactivate at least once forwards successfully

#### Returns

`boolean`

---

### index

`get` **index**(): `number`

#### Returns

`number`

---

### isActive

`get` **isActive**(): `boolean`

#### Returns

`boolean`

---

### isFirst

`get` **isFirst**(): `boolean`

#### Returns

`boolean`

---

### isLast

`get` **isLast**(): `boolean`

#### Returns

`boolean`

---

### touched

`get` **touched**(): `boolean`

Gets whether the step got touched, meaning it did activate at least once successfully

#### Returns

`boolean`

---

### undone

`get` **undone**(): `boolean`

Gets whether the step is not done, meaning it did not deactivate once forwards successfully yet

#### Returns

`boolean`

---

### untouched

`get` **untouched**(): `boolean`

Gets whether the step is still untouched, meaning it did not activate once yet

#### Returns

`boolean`

## Methods

### activate

**activate**(`options?`): `Promise`<`void`\>

#### Parameters

| Name       | Type                                                                    |
| :--------- | :---------------------------------------------------------------------- |
| `options?` | [`StepActivateOptions`](../interfaces/StepModel.StepActivateOptions.md) |

#### Returns

`Promise`<`void`\>

---

### canActivate

**canActivate**(`direction`, `previous?`, `options?`): `Promise`<`boolean`\>

#### Parameters

| Name        | Type                                                              |
| :---------- | :---------------------------------------------------------------- |
| `direction` | [`StepDirection`](../modules/StepModel.md#stepdirection)          |
| `previous?` | [`Step`](StepModel.Step.md)                                       |
| `options?`  | [`StepGuardOptions`](../interfaces/StepModel.StepGuardOptions.md) |

#### Returns

`Promise`<`boolean`\>

---

### canDeactivate

**canDeactivate**(`direction`, `next`, `options?`): `Promise`<`boolean`\>

#### Parameters

| Name        | Type                                                              |
| :---------- | :---------------------------------------------------------------- |
| `direction` | [`StepDirection`](../modules/StepModel.md#stepdirection)          |
| `next`      | [`Step`](StepModel.Step.md)                                       |
| `options?`  | [`StepGuardOptions`](../interfaces/StepModel.StepGuardOptions.md) |

#### Returns

`Promise`<`boolean`\>

---

### markAsDone

**markAsDone**(): `void`

#### Returns

`void`

---

### markAsTouched

**markAsTouched**(): `void`

#### Returns

`void`

---

### markAsUndone

**markAsUndone**(): `void`

#### Returns

`void`

---

### markAsUntouched

**markAsUntouched**(): `void`

#### Returns

`void`

---

### reset

**reset**(`formControlOrOptions`, `model?`): `void`

#### Parameters

| Name                   | Type                                                                                                  |
| :--------------------- | :---------------------------------------------------------------------------------------------------- |
| `formControlOrOptions` | `null` \| `AbstractControl`<`any`, `any`\> \| [`StepOptions`](../interfaces/StepModel.StepOptions.md) |
| `model?`               | [`StepModel`](StepModel.StepModel.md)                                                                 |

#### Returns

`void`
