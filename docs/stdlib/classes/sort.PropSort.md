# Class: PropSort<T\>

[sort](../modules/sort.md).PropSort

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

- [`Sort`](sort.Sort.md)<`T`\>

  ↳ **`PropSort`**

## Table of contents

### Constructors

- [constructor](sort.PropSort.md#constructor)

### Properties

- [comparator](sort.PropSort.md#comparator)
- [defaultOrder](sort.PropSort.md#defaultorder)
- [selector](sort.PropSort.md#selector)

### Methods

- [apply](sort.PropSort.md#apply)

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

[Sort](sort.Sort.md).[constructor](sort.Sort.md#constructor)

## Properties

### comparator

• **comparator**: [`SortComparator`](../modules/sort.md#sortcomparator)<`T`\>

#### Inherited from

[Sort](sort.Sort.md).[comparator](sort.Sort.md#comparator)

---

### defaultOrder

• `Optional` **defaultOrder**: [`SortOrder`](../modules/sort.md#sortorder)

#### Inherited from

[Sort](sort.Sort.md).[defaultOrder](sort.Sort.md#defaultorder)

---

### selector

• `Readonly` **selector**: `string` \| `PropertyKey`[] \| (`o`: `T`) => `any`

## Methods

### apply

▸ **apply**(`data`, `order?`): `T`[]

#### Parameters

| Name    | Type                                                       |
| :------ | :--------------------------------------------------------- |
| `data`  | `Iterable`<`T`\>                                           |
| `order` | `undefined` \| [`SortOrder`](../modules/sort.md#sortorder) |

#### Returns

`T`[]

#### Inherited from

[Sort](sort.Sort.md).[apply](sort.Sort.md#apply)
