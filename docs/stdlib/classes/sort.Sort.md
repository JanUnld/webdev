# Class: Sort<T\>

[sort](../modules/sort.md).Sort

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

- **`Sort`**

  ↳ [`PropSort`](sort.PropSort.md)

## Table of contents

### Constructors

- [constructor](sort.Sort.md#constructor)

### Properties

- [comparator](sort.Sort.md#comparator)
- [defaultOrder](sort.Sort.md#defaultorder)

### Methods

- [apply](sort.Sort.md#apply)

## Constructors

### constructor

• **new Sort**<`T`\>(`comparator`, `defaultOrder?`)

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name            | Type                                                        |
| :-------------- | :---------------------------------------------------------- |
| `comparator`    | [`SortComparator`](../modules/sort.md#sortcomparator)<`T`\> |
| `defaultOrder?` | [`SortOrder`](../modules/sort.md#sortorder)                 |

## Properties

### comparator

• **comparator**: [`SortComparator`](../modules/sort.md#sortcomparator)<`T`\>

---

### defaultOrder

• `Optional` **defaultOrder**: [`SortOrder`](../modules/sort.md#sortorder)

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
