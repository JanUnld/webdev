# Class: PropSort<T\>

[Sort](../modules/Sort.md).PropSort

Basic property sort mechanism comparing the raw values returned from the [selector](Sort.PropSort.md#selector). The
selector may be specified as either a selector function or a property path descriptor

**`Example`**

```typescript
new PropSort('foo.bar').apply([
  { foo: { bar: 'z' } },
  { foo: { bar: 'a' } }
])
// [
//   { foo: { bar: 'a' } },
//   { foo: { bar: 'z' } }
// ]
```

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Sort`](Sort.Sort.md)<`T`\>

  ↳ **`PropSort`**

## Table of contents

### Constructors

- [constructor](Sort.PropSort.md#constructor)

### Properties

- [comparator](Sort.PropSort.md#comparator)
- [defaultOrder](Sort.PropSort.md#defaultorder)
- [selector](Sort.PropSort.md#selector)

### Methods

- [apply](Sort.PropSort.md#apply)

## Constructors

### constructor

**new PropSort**<`T`\>(`selector`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `string` \| `PropertyKey`[] \| (`o`: `T`) => `unknown` | Either a selector function or property path to resolve values when sorting |

#### Overrides

[Sort](Sort.Sort.md).[constructor](Sort.Sort.md#constructor)

## Properties

### comparator

 **comparator**: (`a`: `T`, `b`: `T`) => `number`

#### Type declaration

(`a`, `b`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

##### Returns

`number`

#### Inherited from

[Sort](Sort.Sort.md).[comparator](Sort.Sort.md#comparator)

___

### defaultOrder

 `Optional` **defaultOrder**: [`SortOrder`](../modules/Sort.md#sortorder)

#### Inherited from

[Sort](Sort.Sort.md).[defaultOrder](Sort.Sort.md#defaultorder)

___

### selector

 **selector**: `string` \| `PropertyKey`[] \| (`o`: `T`) => `unknown`

## Methods

### apply

**apply**(`data`, `order?`): `T`[]

Sorts the input data based on the set [comparator](Sort.PropSort.md#comparator) and [defaultOrder](Sort.PropSort.md#defaultorder). Ordering may also
be customized in line using the order parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Iterable`<`T`\> | The desired data to be sorted |
| `order` | `undefined` \| [`SortOrder`](../modules/Sort.md#sortorder) | The order to enforce during the sort |

#### Returns

`T`[]

#### Inherited from

[Sort](Sort.Sort.md).[apply](Sort.Sort.md#apply)
