[@janunld/angular](../README.md) / [Exports](../modules.md) / [Sort](../modules/Sort.md) / SortModel

# Class: SortModel

[Sort](../modules/Sort.md).SortModel

## Table of contents

### Constructors

- [constructor](Sort.SortModel.md#constructor)

### Properties

- [allowsMultiple](Sort.SortModel.md#allowsmultiple)
- [changes](Sort.SortModel.md#changes)

### Accessors

- [value](Sort.SortModel.md#value)

### Methods

- [getOrder](Sort.SortModel.md#getorder)
- [isAscending](Sort.SortModel.md#isascending)
- [isDescending](Sort.SortModel.md#isdescending)
- [isSet](Sort.SortModel.md#isset)
- [set](Sort.SortModel.md#set)
- [unset](Sort.SortModel.md#unset)

## Constructors

### constructor

**new SortModel**()

## Properties

### allowsMultiple

**allowsMultiple**: `boolean` = `false`

---

### changes

`Readonly` **changes**: `EventEmitter`<[`SortModelChange`](../interfaces/Sort.SortModelChange.md)\>

## Accessors

### value

`get` **value**(): [`SortState`](../interfaces/Sort.SortState.md)[]

#### Returns

[`SortState`](../interfaces/Sort.SortState.md)[]

## Methods

### getOrder

**getOrder**(`key`): `null` \| `SortOrder`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Returns

`null` \| `SortOrder`

---

### isAscending

**isAscending**(`key`): `boolean`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Returns

`boolean`

---

### isDescending

**isDescending**(`key`): `boolean`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Returns

`boolean`

---

### isSet

**isSet**(`key`, `order?`): `boolean`

#### Parameters

| Name     | Type        |
| :------- | :---------- |
| `key`    | `string`    |
| `order?` | `SortOrder` |

#### Returns

`boolean`

---

### set

**set**(`key`, `order`, `options?`): `void`

#### Parameters

| Name       | Type                                                           |
| :--------- | :------------------------------------------------------------- |
| `key`      | `string`                                                       |
| `order`    | `SortOrder`                                                    |
| `options?` | [`SortActionOptions`](../interfaces/Sort.SortActionOptions.md) |

#### Returns

`void`

---

### unset

**unset**(`options?`): `void`

#### Parameters

| Name       | Type                                                           |
| :--------- | :------------------------------------------------------------- |
| `options?` | [`SortActionOptions`](../interfaces/Sort.SortActionOptions.md) |

#### Returns

`void`

**unset**(`key?`, `options?`): `void`

#### Parameters

| Name       | Type                                                           |
| :--------- | :------------------------------------------------------------- |
| `key?`     | `string`                                                       |
| `options?` | [`SortActionOptions`](../interfaces/Sort.SortActionOptions.md) |

#### Returns

`void`
