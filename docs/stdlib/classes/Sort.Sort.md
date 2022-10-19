[@janunld/stdlib](../README.md) / [Exports](../modules.md) / [Sort](../modules/Sort.md) / Sort

# Class: Sort<T\>

[Sort](../modules/Sort.md).Sort

Basic sort mechanism implementation meant to be extended. May also be used as-is

## Type parameters

| Name |
| :--- |
| `T`  |

## Hierarchy

- **`Sort`**

  ↳ [`PropSort`](Sort.PropSort.md)

## Table of contents

### Constructors

- [constructor](Sort.Sort.md#constructor)

### Properties

- [comparator](Sort.Sort.md#comparator)
- [defaultOrder](Sort.Sort.md#defaultorder)

### Methods

- [apply](Sort.Sort.md#apply)

## Constructors

### constructor

**new Sort**<`T`\>(`comparator`, `defaultOrder?`)

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name            | Type                                        | Description                                                   |
| :-------------- | :------------------------------------------ | :------------------------------------------------------------ |
| `comparator`    | (`a`: `T`, `b`: `T`) => `number`            | The comparator function to be used to sort                    |
| `defaultOrder?` | [`SortOrder`](../modules/Sort.md#sortorder) | The default order the comparator function implicitly enforces |

## Properties

### comparator

**comparator**: (`a`: `T`, `b`: `T`) => `number`

#### Type declaration

(`a`, `b`): `number`

##### Parameters

| Name | Type |
| :--- | :--- |
| `a`  | `T`  |
| `b`  | `T`  |

##### Returns

`number`

---

### defaultOrder

`Optional` **defaultOrder**: [`SortOrder`](../modules/Sort.md#sortorder)

## Methods

### apply

**apply**(`data`, `order?`): `T`[]

Sorts the input data based on the set [comparator](Sort.Sort.md#comparator) and [defaultOrder](Sort.Sort.md#defaultorder). Ordering may also
be customized in line using the order parameter

#### Parameters

| Name    | Type                                                       | Description                          |
| :------ | :--------------------------------------------------------- | :----------------------------------- |
| `data`  | `Iterable`<`T`\>                                           | The desired data to be sorted        |
| `order` | `undefined` \| [`SortOrder`](../modules/Sort.md#sortorder) | The order to enforce during the sort |

#### Returns

`T`[]
