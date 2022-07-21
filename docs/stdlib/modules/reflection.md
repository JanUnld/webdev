# Module: reflection

## Table of contents

### Type Aliases

- [IteratorResult](reflection.md#iteratorresult)
- [Predicate](reflection.md#predicate)
- [Primitive](reflection.md#primitive)

### Functions

- [distinct](reflection.md#distinct)
- [distinctBy](reflection.md#distinctby)
- [isIterable](reflection.md#isiterable)
- [isPrimitive](reflection.md#isprimitive)
- [omit](reflection.md#omit)
- [queryObjectProp](reflection.md#queryobjectprop)
- [queryObjectPropPath](reflection.md#queryobjectproppath)
- [traverse](reflection.md#traverse)

## Type Aliases

### IteratorResult

Ƭ **IteratorResult**<`T`\>: `T` extends `Iterable`<infer U\> ? `U` : `never`

Infers the iterator result type of an arbitrary Iterable type

#### Type parameters

| Name |
| :--- |
| `T`  |

---

### Predicate

Ƭ **Predicate**<`T`\>: (`value`: `T`, ...`args`: `unknown`[]) => `boolean`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Type declaration

▸ (`value`, ...`args`): `boolean`

##### Parameters

| Name      | Type        |
| :-------- | :---------- |
| `value`   | `T`         |
| `...args` | `unknown`[] |

##### Returns

`boolean`

---

### Primitive

Ƭ **Primitive**: `boolean` \| `number` \| `string` \| `symbol`

Union for primitive value types such as boolean, number, [string](string.md) or symbol

## Functions

### distinct

▸ **distinct**(`it`, `i`, `arr`): `boolean`

Distinctively filters a collection leaving only unique entries

#### Parameters

| Name  | Type        |
| :---- | :---------- |
| `it`  | `unknown`   |
| `i`   | `number`    |
| `arr` | `unknown`[] |

#### Returns

`boolean`

---

### distinctBy

▸ **distinctBy**<`T`\>(`selector`): (`it2`: `T`, `i`: `number`, `arr`: `T`[]) => `boolean`

Distinctively filters a collection leaving only unique entries using a selector function

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type                 |
| :--------- | :------------------- |
| `selector` | (`it`: `T`) => `any` |

#### Returns

`fn`

▸ (`it2`, `i`, `arr`): `boolean`

##### Parameters

| Name  | Type     |
| :---- | :------- |
| `it2` | `T`      |
| `i`   | `number` |
| `arr` | `T`[]    |

##### Returns

`boolean`

---

### isIterable

▸ **isIterable**(`obj`): obj is Iterable<unknown\>

Returns whether a given object is Iterable

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `obj` | `any` |

#### Returns

obj is Iterable<unknown\>

---

### isPrimitive

▸ **isPrimitive**(`obj`): obj is Primitive

Returns whether a given value is a [Primitive](reflection.md#primitive) or not

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `obj` | `any` |

#### Returns

obj is Primitive

---

### omit

▸ **omit**<`T`, `K`\>(`obj`, ...`exclude`): `Omit`<`T`, `K`\>

#### Type parameters

| Name | Type                                     |
| :--- | :--------------------------------------- |
| `T`  | `T`                                      |
| `K`  | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name         | Type  |
| :----------- | :---- |
| `obj`        | `T`   |
| `...exclude` | `K`[] |

#### Returns

`Omit`<`T`, `K`\>

---

### queryObjectProp

▸ **queryObjectProp**<`T`, `O`\>(`obj`, `query`): `T`

Queries an object property value either by using a selector function or a path as described by [queryObjectPropPath](reflection.md#queryobjectproppath)

**`Example`**

```typescript
queryObjectProp(obj, '0.prop1.1.prop2');
queryObjectProp(obj, [0, 'prop1', 1, 'prop2']);
queryObjectProp(obj, (o) => o?.[0]?.prop1?.[1]?.prop2);
```

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |
| `O`  | `unknown` |

#### Parameters

| Name    | Type                                               | Description                                                                               |
| :------ | :------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| `obj`   | `O`                                                | The targeted object to resolve the path from                                              |
| `query` | `string` \| `PropertyKey`[] \| (`obj`: `O`) => `T` | The desired query function or property path as explicit array or dot (.) separated string |

#### Returns

`T`

---

### queryObjectPropPath

▸ **queryObjectPropPath**<`T`\>(`obj`, `path`): `T`

Queries an object property value by its path in the format `prop1.prop2.prop3` also including out of the
box support for index based signatures e.g. `0.prop1.1.prop2`. The resolution is performed in a null safe manner,
not breaking but returning when discovering such an undefined case

**`Example`**

```typescript
queryObjectPropPath(obj, '0.prop1.1.prop2');
queryObjectPropPath(obj, [0, 'prop1', 1, 'prop2']);
```

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Parameters

| Name   | Type                        | Description                                                             |
| :----- | :-------------------------- | :---------------------------------------------------------------------- |
| `obj`  | `unknown`                   | The targeted object to resolve the path from                            |
| `path` | `string` \| `PropertyKey`[] | The desired property path as explicit array or dot (.) separated string |

#### Returns

`T`

---

### traverse

▸ **traverse**<`T`\>(`obj`, `nextObjSelector`, `breakPredicate?`): `T`

Traverses an object instance based on a "next" selector function. The traverse operation recursively continues
until it either hits a `null` or `undefined` "next" value or an optionally also providable "break" predicate
function will return a truthy result

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name              | Type                                         | Description                                              |
| :---------------- | :------------------------------------------- | :------------------------------------------------------- |
| `obj`             | `T`                                          | The object instance to traverse through                  |
| `nextObjSelector` | (`obj`: `T`) => `any`                        | The "next" value selector function                       |
| `breakPredicate?` | [`Predicate`](reflection.md#predicate)<`T`\> | Optional predicate to break the traversal operation with |

#### Returns

`T`
