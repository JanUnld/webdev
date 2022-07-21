# Class: PropSort<T\>

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

- [`Sort`](Sort.md)<`T`\>

  ↳ **`PropSort`**

## Table of contents

### Constructors

- [constructor](PropSort.md#constructor)

### Properties

- [comparator](PropSort.md#comparator)
- [defaultOrder](PropSort.md#defaultorder)
- [selector](PropSort.md#selector)

### Methods

- [apply](PropSort.md#apply)

## Constructors

### constructor

• **new PropSort**<`T`\>(`selector`)

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name       | Type                                               |
| :--------- | :------------------------------------------------- |
| `selector` | `string` \| `PropertyKey`[] \| (`o`: `T`) => `any` |

#### Overrides

[Sort](Sort.md).[constructor](Sort.md#constructor)

## Properties

### comparator

• **comparator**: [`SortComparator`](../modules.md#sortcomparator)<`T`\>

#### Inherited from

[Sort](Sort.md).[comparator](Sort.md#comparator)

---

### defaultOrder

• `Optional` **defaultOrder**: [`SortOrder`](../modules.md#sortorder)

#### Inherited from

[Sort](Sort.md).[defaultOrder](Sort.md#defaultorder)

---

### selector

• `Readonly` **selector**: `string` \| `PropertyKey`[] \| (`o`: `T`) => `any`

## Methods

### apply

▸ **apply**(`data`, `order?`): `T`[]

#### Parameters

| Name    | Type                                                  |
| :------ | :---------------------------------------------------- |
| `data`  | `Iterable`<`T`\>                                      |
| `order` | `undefined` \| [`SortOrder`](../modules.md#sortorder) |

#### Returns

`T`[]

#### Inherited from

[Sort](Sort.md).[apply](Sort.md#apply)
