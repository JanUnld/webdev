[@janunld/angular](../README.md) / [Exports](../modules.md) / [Sort](../modules/Sort.md) / SortGroup

# Class: SortGroup

[Sort](../modules/Sort.md).SortGroup

## Implements

- `OnInit`
- `OnDestroy`

## Table of contents

### Constructors

- [constructor](Sort.SortGroup.md#constructor)

### Properties

- [changes](Sort.SortGroup.md#changes)
- [model](Sort.SortGroup.md#model)
- [preferredOrder](Sort.SortGroup.md#preferredorder)

### Accessors

- [allowsMultiple](Sort.SortGroup.md#allowsmultiple)
- [emitInitChange](Sort.SortGroup.md#emitinitchange)

### Methods

- [ngOnDestroy](Sort.SortGroup.md#ngondestroy)
- [ngOnInit](Sort.SortGroup.md#ngoninit)

## Constructors

### constructor

**new SortGroup**(`model`, `paramParser`, `options?`)

#### Parameters

| Name          | Type                                                                                                                  |
| :------------ | :-------------------------------------------------------------------------------------------------------------------- |
| `model`       | [`SortModel`](Sort.SortModel.md)                                                                                      |
| `paramParser` | [`SortParamParser`](Sort.SortParamParser.md)                                                                          |
| `options?`    | `Partial`<`Pick`<[`SortGroup`](Sort.SortGroup.md), `"allowsMultiple"` \| `"emitInitChange"` \| `"preferredOrder"`\>\> |

## Properties

### changes

`Readonly` **changes**: `EventEmitter`<[`SortModelChange`](../interfaces/Sort.SortModelChange.md)\>

---

### model

`Readonly` **model**: [`SortModel`](Sort.SortModel.md)

---

### preferredOrder

**preferredOrder**: `SortOrder` = `'ascending'`

## Accessors

### allowsMultiple

`get` **allowsMultiple**(): `boolean`

#### Returns

`boolean`

`set` **allowsMultiple**(`value`): `void`

#### Parameters

| Name    | Type                  |
| :------ | :-------------------- |
| `value` | `string` \| `boolean` |

#### Returns

`void`

---

### emitInitChange

`get` **emitInitChange**(): `boolean`

#### Returns

`boolean`

`set` **emitInitChange**(`value`): `void`

#### Parameters

| Name    | Type                  |
| :------ | :-------------------- |
| `value` | `string` \| `boolean` |

#### Returns

`void`

## Methods

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
