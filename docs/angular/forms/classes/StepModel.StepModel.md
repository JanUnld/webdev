[@janunld/angular/forms](../README.md) / [Exports](../modules.md) / [StepModel](../modules/StepModel.md) / StepModel

# Class: StepModel

[StepModel](../modules/StepModel.md).StepModel

## Hierarchy

- `Observable`<[`Step`](StepModel.Step.md) \| `null`\>

  ↳ **`StepModel`**

## Implements

- `Iterable`<[`Step`](StepModel.Step.md)\>

## Table of contents

### Constructors

- [constructor](StepModel.StepModel.md#constructor)

### Accessors

- [active](StepModel.StepModel.md#active)
- [first](StepModel.StepModel.md#first)
- [last](StepModel.StepModel.md#last)
- [next](StepModel.StepModel.md#next)
- [previous](StepModel.StepModel.md#previous)

### Methods

- [activate](StepModel.StepModel.md#activate)
- [get](StepModel.StepModel.md#get)
- [indexOf](StepModel.StepModel.md#indexof)
- [isActive](StepModel.StepModel.md#isactive)
- [reset](StepModel.StepModel.md#reset)

## Constructors

### constructor

**new StepModel**(`model`)

#### Parameters

| Name    | Type                                                       |
| :------ | :--------------------------------------------------------- |
| `model` | [`StepModelInput`](../modules/StepModel.md#stepmodelinput) |

#### Overrides

Observable&lt;Step \| null\&gt;.constructor

## Accessors

### active

`get` **active**(): `null` \| [`Step`](StepModel.Step.md)

#### Returns

`null` \| [`Step`](StepModel.Step.md)

---

### first

`get` **first**(): `null` \| [`Step`](StepModel.Step.md)

#### Returns

`null` \| [`Step`](StepModel.Step.md)

---

### last

`get` **last**(): `null` \| [`Step`](StepModel.Step.md)

#### Returns

`null` \| [`Step`](StepModel.Step.md)

---

### next

`get` **next**(): `null` \| [`Step`](StepModel.Step.md)

#### Returns

`null` \| [`Step`](StepModel.Step.md)

---

### previous

`get` **previous**(): `null` \| [`Step`](StepModel.Step.md)

#### Returns

`null` \| [`Step`](StepModel.Step.md)

## Methods

### activate

**activate**(`stepOrNameOrIndex`, `options?`): `Promise`<`void`\>

#### Parameters

| Name                | Type                                                                    |
| :------------------ | :---------------------------------------------------------------------- |
| `stepOrNameOrIndex` | `string` \| `number` \| [`Step`](StepModel.Step.md)                     |
| `options?`          | [`StepActivateOptions`](../interfaces/StepModel.StepActivateOptions.md) |

#### Returns

`Promise`<`void`\>

---

### get

**get**(`stepNameOrIndex`): `null` \| [`Step`](StepModel.Step.md)

#### Parameters

| Name              | Type                 |
| :---------------- | :------------------- |
| `stepNameOrIndex` | `string` \| `number` |

#### Returns

`null` \| [`Step`](StepModel.Step.md)

---

### indexOf

**indexOf**(`stepOrName`): `number`

#### Parameters

| Name         | Type                                    |
| :----------- | :-------------------------------------- |
| `stepOrName` | `string` \| [`Step`](StepModel.Step.md) |

#### Returns

`number`

---

### isActive

**isActive**(`stepOrNameOrIndex`): `boolean`

#### Parameters

| Name                | Type                                                |
| :------------------ | :-------------------------------------------------- |
| `stepOrNameOrIndex` | `string` \| `number` \| [`Step`](StepModel.Step.md) |

#### Returns

`boolean`

---

### reset

**reset**(`model`): `void`

#### Parameters

| Name    | Type                                                       |
| :------ | :--------------------------------------------------------- |
| `model` | [`StepModelInput`](../modules/StepModel.md#stepmodelinput) |

#### Returns

`void`
