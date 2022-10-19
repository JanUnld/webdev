[@janunld/stdlib](../README.md) / [Exports](../modules.md) / Sort

# Module: Sort

## Table of contents

### Classes

- [PropSort](../classes/Sort.PropSort.md)
- [Sort](../classes/Sort.Sort.md)

### Type Aliases

- [SortOrder](Sort.md#sortorder)

### Functions

- [isSortOrder](Sort.md#issortorder)
- [parseSortOrder](Sort.md#parsesortorder)
- [reverseSortOrder](Sort.md#reversesortorder)

## Type Aliases

### SortOrder

**SortOrder**: `"ascending"` \| `"descending"`

The order in which sorting will happen, either ascending or descending

## Functions

### isSortOrder

**isSortOrder**(`value`, `order?`): `boolean`

Identifies whether a string value is a [SortOrder](Sort.md#sortorder) value or explicitly checks whether
the value is a specific [SortOrder](Sort.md#sortorder) using the order parameter

**`Example`**

```typescript
isSortOrder('asc'); // true
isSortOrder('asc', 'ascending'); // true
isSortOrder('asc', 'descending'); // false
```

#### Parameters

| Name     | Type                             | Description                                      |
| :------- | :------------------------------- | :----------------------------------------------- |
| `value`  | `string`                         | The string value to be checked                   |
| `order?` | [`SortOrder`](Sort.md#sortorder) | Optional order value to explicitly check against |

#### Returns

`boolean`

---

### parseSortOrder

**parseSortOrder**(`str`, `fallback?`): `undefined` \| [`SortOrder`](Sort.md#sortorder)

Parses a [SortOrder](Sort.md#sortorder) value based on a string input

**`Example`**

```typescript
parseSortOrder('asc'); // 'ascending'
```

#### Parameters

| Name        | Type                             | Description                                                                 |
| :---------- | :------------------------------- | :-------------------------------------------------------------------------- |
| `str`       | `string`                         | The string value to be parsed                                               |
| `fallback?` | [`SortOrder`](Sort.md#sortorder) | The fallback [SortOrder](Sort.md#sortorder) value to use when parsing fails |

#### Returns

`undefined` \| [`SortOrder`](Sort.md#sortorder)

---

### reverseSortOrder

**reverseSortOrder**(`order`): [`SortOrder`](Sort.md#sortorder)

Reverses a [SortOrder](Sort.md#sortorder) value

**`Example`**

```typescript
reverseSortOrder('ascending'); // 'descending'
reverseSortOrder('descending'); // 'ascending'
```

#### Parameters

| Name    | Type                             |
| :------ | :------------------------------- |
| `order` | [`SortOrder`](Sort.md#sortorder) |

#### Returns

[`SortOrder`](Sort.md#sortorder)
