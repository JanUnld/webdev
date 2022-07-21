# Class: Sort<T\>

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

- **`Sort`**

  ↳ [`PropSort`](PropSort.md)

## Table of contents

### Constructors

- [constructor](Sort.md#constructor)

### Properties

- [comparator](Sort.md#comparator)
- [defaultOrder](Sort.md#defaultorder)

### Methods

- [apply](Sort.md#apply)

## Constructors

### constructor

• **new Sort**<`T`\>(`comparator`, `defaultOrder?`)

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name            | Type                                                   |
| :-------------- | :----------------------------------------------------- |
| `comparator`    | [`SortComparator`](../modules.md#sortcomparator)<`T`\> |
| `defaultOrder?` | [`SortOrder`](../modules.md#sortorder)                 |

## Properties

### comparator

• **comparator**: [`SortComparator`](../modules.md#sortcomparator)<`T`\>

---

### defaultOrder

• `Optional` **defaultOrder**: [`SortOrder`](../modules.md#sortorder)

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
