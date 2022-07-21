# Module: sort

## Table of contents

### Classes

- [PropSort](../classes/sort.PropSort.md)
- [Sort](../classes/sort.Sort.md)

### Type Aliases

- [SortComparator](sort.md#sortcomparator)
- [SortOrder](sort.md#sortorder)

### Functions

- [compareObjectProps](sort.md#compareobjectprops)
- [isSortOrder](sort.md#issortorder)
- [parseSortOrder](sort.md#parsesortorder)
- [parseSortState](sort.md#parsesortstate)
- [reverseSortOrder](sort.md#reversesortorder)

## Type Aliases

### SortComparator

Ƭ **SortComparator**<`T`\>: (`a`: `T`, `b`: `T`) => `number`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Type declaration

▸ (`a`, `b`): `number`

##### Parameters

| Name | Type |
| :--- | :--- |
| `a`  | `T`  |
| `b`  | `T`  |

##### Returns

`number`

---

### SortOrder

Ƭ **SortOrder**: `"ascending"` \| `"descending"`

## Functions

### compareObjectProps

▸ **compareObjectProps**<`T`\>(`selector`, `a`, `b`): `number`

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name       | Type                                               |
| :--------- | :------------------------------------------------- |
| `selector` | `string` \| `PropertyKey`[] \| (`o`: `T`) => `any` |
| `a`        | `T`                                                |
| `b`        | `T`                                                |

#### Returns

`number`

---

### isSortOrder

▸ **isSortOrder**(`value`, `order?`): value is SortOrder

#### Parameters

| Name     | Type                             |
| :------- | :------------------------------- |
| `value`  | `string`                         |
| `order?` | [`SortOrder`](sort.md#sortorder) |

#### Returns

value is SortOrder

---

### parseSortOrder

▸ **parseSortOrder**(`str`, `fallback?`): `undefined` \| [`SortOrder`](sort.md#sortorder)

#### Parameters

| Name        | Type                             |
| :---------- | :------------------------------- |
| `str`       | `string`                         |
| `fallback?` | [`SortOrder`](sort.md#sortorder) |

#### Returns

`undefined` \| [`SortOrder`](sort.md#sortorder)

---

### parseSortState

▸ **parseSortState**(`str`): `undefined` \| `null` \| { `key`: `string` ; `order`: `undefined` \| [`SortOrder`](sort.md#sortorder) }

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `str` | `string` |

#### Returns

`undefined` \| `null` \| { `key`: `string` ; `order`: `undefined` \| [`SortOrder`](sort.md#sortorder) }

---

### reverseSortOrder

▸ **reverseSortOrder**(`order`): [`SortOrder`](sort.md#sortorder)

#### Parameters

| Name    | Type                             |
| :------ | :------------------------------- |
| `order` | [`SortOrder`](sort.md#sortorder) |

#### Returns

[`SortOrder`](sort.md#sortorder)
