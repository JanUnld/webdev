# Module: Reflection

## Table of contents

### Type Aliases

- [IteratorResult](Reflection.md#iteratorresult)
- [Predicate](Reflection.md#predicate)
- [Primitive](Reflection.md#primitive)

### Functions

- [isIterable](Reflection.md#isiterable)
- [isPrimitive](Reflection.md#isprimitive)
- [traverse](Reflection.md#traverse)

## Type Aliases

### IteratorResult

 **IteratorResult**<`T`\>: `T` extends `Iterable`<infer U\> ? `U` : `never`

Infers the iterator result type of an arbitrary Iterable type

**`Example`**

```typescript
type ItemType = IteratorResult<Iterable<string>>; // string
```

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Predicate

 **Predicate**<`T`, `P`\>: (`value`: `T`, ...`args`: `P`) => `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `any`[] = `unknown`[] |

#### Type declaration

(`value`, ...`args`): `boolean`

Describes a predicate function returning either `true` or `false`, depending on the input value and arguments

**`Example`**

```typescript
const isBar: Predicate<{ foo: string }> = value => value.foo === 'bar';
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `...args` | `P` |

##### Returns

`boolean`

___

### Primitive

 **Primitive**: `boolean` \| `number` \| `string` \| `symbol`

Union for primitive value types such as boolean, number, string or symbol

## Functions

### isIterable

**isIterable**(`obj`): obj is Iterable<unknown\>

Returns whether a given object is Iterable

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

obj is Iterable<unknown\>

___

### isPrimitive

**isPrimitive**(`obj`): obj is Primitive

Returns whether a given value is a [Primitive](Reflection.md#primitive) or not

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

obj is Primitive

___

### traverse

**traverse**<`T`\>(`obj`, `options`): `T`

Traverses an object instance based on a "next" selector function. The traverse operation recursively continues
until it either hits a `null` or `undefined` "next" value or an optionally also providable "break" predicate
function will return a truthy result.

**`Example`**

```typescript
traverse(treeNode, {
  through: 'parentNode',
  break: (node) => node.foo === 'bar'
})
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | The object or array to traverse through |
| `options` | `Object` | Required configuration interface |
| `options.break?` | [`Predicate`](Reflection.md#predicate)<`T`, `unknown`[]\> | Optional predicate to break the traverse when returning `true` |
| `options.through` | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `unknown` | The selector function or property path returning the _next_ traverse target |

#### Returns

`T`
