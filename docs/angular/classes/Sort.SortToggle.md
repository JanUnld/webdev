[@janunld/angular](../README.md) / [Exports](../modules.md) / [Sort](../modules/Sort.md) / SortToggle

# Class: SortToggle

[Sort](../modules/Sort.md).SortToggle

## Table of contents

### Constructors

- [constructor](Sort.SortToggle.md#constructor)

### Properties

- [changes](Sort.SortToggle.md#changes)
- [preferredOrder](Sort.SortToggle.md#preferredorder)

### Accessors

- [canUnset](Sort.SortToggle.md#canunset)
- [key](Sort.SortToggle.md#key)
- [order](Sort.SortToggle.md#order)

### Methods

- [set](Sort.SortToggle.md#set)
- [toggle](Sort.SortToggle.md#toggle)
- [unset](Sort.SortToggle.md#unset)

## Constructors

### constructor

**new SortToggle**(`sortModel`, `paramParser`, `sortGroup`)

#### Parameters

| Name          | Type                                         |
| :------------ | :------------------------------------------- |
| `sortModel`   | [`SortModel`](Sort.SortModel.md)             |
| `paramParser` | [`SortParamParser`](Sort.SortParamParser.md) |
| `sortGroup`   | [`SortGroup`](Sort.SortGroup.md)             |

## Properties

### changes

`Readonly` **changes**: `EventEmitter`<`null` \| `SortOrder`\>

---

### preferredOrder

**preferredOrder**: `SortOrder` = `'ascending'`

## Accessors

### canUnset

`get` **canUnset**(): `boolean`

#### Returns

`boolean`

`set` **canUnset**(`value`): `void`

#### Parameters

| Name    | Type                  |
| :------ | :-------------------- |
| `value` | `string` \| `boolean` |

#### Returns

`void`

---

### key

`get` **key**(): `null` \| `string`

#### Returns

`null` \| `string`

`set` **key**(`value`): `void`

#### Parameters

| Name    | Type               |
| :------ | :----------------- |
| `value` | `null` \| `string` |

#### Returns

`void`

---

### order

`get` **order**(): `null` \| `SortOrder`

#### Returns

`null` \| `SortOrder`

## Methods

### set

**set**(`order`): `void`

#### Parameters

| Name    | Type        |
| :------ | :---------- |
| `order` | `SortOrder` |

#### Returns

`void`

---

### toggle

**toggle**(): `void`

#### Returns

`void`

---

### unset

**unset**(): `void`

#### Returns

`void`
