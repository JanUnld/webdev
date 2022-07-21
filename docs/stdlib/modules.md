# @janunld/stdlib

## Table of contents

### Classes

- [PropSort](classes/PropSort.md)
- [Sort](classes/Sort.md)

### Type Aliases

- [FlatTreeNode](modules.md#flattreenode)
- [IteratorResult](modules.md#iteratorresult)
- [Predicate](modules.md#predicate)
- [Primitive](modules.md#primitive)
- [RemoveEmptyJsonPropTarget](modules.md#removeemptyjsonproptarget)
- [SortComparator](modules.md#sortcomparator)
- [SortOrder](modules.md#sortorder)
- [TreeNode](modules.md#treenode)

### Functions

- [compareObjectProps](modules.md#compareobjectprops)
- [distinct](modules.md#distinct)
- [distinctBy](modules.md#distinctby)
- [flattenTree](modules.md#flattentree)
- [format](modules.md#format)
- [formatFullName](modules.md#formatfullname)
- [formatPostalAddress](modules.md#formatpostaladdress)
- [isAbsoluteURL](modules.md#isabsoluteurl)
- [isIterable](modules.md#isiterable)
- [isPrimitive](modules.md#isprimitive)
- [isSortOrder](modules.md#issortorder)
- [normalizeAbsoluteUrl](modules.md#normalizeabsoluteurl)
- [normalizeUrl](modules.md#normalizeurl)
- [omit](modules.md#omit)
- [parseSortOrder](modules.md#parsesortorder)
- [parseSortState](modules.md#parsesortstate)
- [queryObjectProp](modules.md#queryobjectprop)
- [queryObjectPropPath](modules.md#queryobjectproppath)
- [removeEmptyJsonProps](modules.md#removeemptyjsonprops)
- [restoreFlatTree](modules.md#restoreflattree)
- [reverseSortOrder](modules.md#reversesortorder)
- [traverse](modules.md#traverse)
- [trimJsonProps](modules.md#trimjsonprops)

## Type Aliases

### FlatTreeNode

Ƭ **FlatTreeNode**: `Object`

#### Type declaration

| Name          | Type      |
| :------------ | :-------- |
| `childCount?` | `number`  |
| `hasChildren` | `boolean` |
| `level`       | `number`  |

---

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

Union for primitive value types such as boolean, number, string or symbol

---

### RemoveEmptyJsonPropTarget

Ƭ **RemoveEmptyJsonPropTarget**: `"emptyString"` \| `"emptyArray"` \| `"emptyObject"` \| `"nullOrUndefined"`

---

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

---

### TreeNode

Ƭ **TreeNode**: `Object`

#### Type declaration

| Name        | Type                                |
| :---------- | :---------------------------------- |
| `children?` | [`TreeNode`](modules.md#treenode)[] |

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

### flattenTree

▸ **flattenTree**<`T`\>(`tree`, `baseLevel?`): [`FlatTreeNode`](modules.md#flattreenode) & `T`[]

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Parameters

| Name         | Type                                                                     |
| :----------- | :----------------------------------------------------------------------- |
| `tree`       | [`TreeNode`](modules.md#treenode) \| [`TreeNode`](modules.md#treenode)[] |
| `baseLevel?` | `number`                                                                 |

#### Returns

[`FlatTreeNode`](modules.md#flattreenode) & `T`[]

---

### format

▸ **format**<`T`\>(`value`, `options`): `string`

Formats an object into a human-readable string value based on the desired options. Options may customize the format
as well as the tokens that shall be used within the format.

**`Example`**

```typescript
format(date, {
  pattern: 'HH:mm',
  tokens: {
    HH: (d) => d?.getHours(),
    mm: (d) => d?.getMinutes(),
    // property keys do support regular expressions
    's{2}': (d) => d?.getSeconds(),
  },
});
```

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                | Type     | Description                                             |
| :------------------ | :------- | :------------------------------------------------------ |
| `value`             | `T`      | The value to be formatted into human-readable text      |
| `options`           | `Object` | Required options to return the desired formatted output |
| `options.fallback?` | `T`      | -                                                       |
| `options.pattern`   | `string` | -                                                       |
| `options.tokens`    | `Object` | -                                                       |

#### Returns

`string`

---

### formatFullName

▸ **formatFullName**<`T`\>(`obj`, `format?`, `options?`): `string`

Formats any object containing name information into a string. The string format can be provided
using the following tokens. If no format is present the pipe will default to "full". Additionally
any field can be backed up with a fallback value

**Format Tokens:**

| Token | Description                                                   | Example    |
| ----- | ------------------------------------------------------------- | ---------- |
| `FF`  | The fully quantified first name of the person                 | Jane, John |
| `ff`  | Shortened first letter format of the first name of the person | J.         |
| `LL`  | The fully quantified last name of the person                  | Doe        |
| `ll`  | Shortened first letter format of the last name of the person  | D.         |
| `TT`  | The title of the person                                       | Dr.        |

**Format Aliases:**

| Alias       | Format     | Example      |
| ----------- | ---------- | ------------ |
| `full`      | `TT FF LL` | Dr. Jane Doe |
| `short`     | `ff LL`    | J. Doe       |
| `shortLast` | `FF ll`    | Jane D.      |
| `reversed`  | `LL, FF`   | Doe, Jane    |

<br>

**`Example`**

```typescript
formatFullName(obj, 'reversed'); // Doe, Jane
formatFullName(obj, 'TT ff LL'); // Dr. J. Doe
```

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                 | Type                                                    | Default value | Description                                                               |
| :------------------- | :------------------------------------------------------ | :------------ | :------------------------------------------------------------------------ |
| `obj`                | `T`                                                     | `undefined`   | The object value to select the name information from                      |
| `format`             | `string`                                                | `'full'`      | The desired format to use for the output string value. Defaults to "full" |
| `options?`           | `Object`                                                | `undefined`   | Optional parameters that can be used during the format operation          |
| `options.fallback?`  | `T`                                                     | `undefined`   | -                                                                         |
| `options.firstName?` | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `string` | `undefined`   | -                                                                         |
| `options.lastName?`  | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `string` | `undefined`   | -                                                                         |
| `options.title?`     | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `string` | `undefined`   | -                                                                         |

#### Returns

`string`

---

### formatPostalAddress

▸ **formatPostalAddress**<`T`\>(`obj`, `format?`, `options?`): `string`

Formats any object containing address information into a string. The string format can be provided
using the following tokens. If no format is present the pipe will default to "full". Additionally
any field can be backed up with a fallback value

**Format Tokens:**

| Token | Description                      |
| ----- | -------------------------------- |
| `sss` | The street name of the address   |
| `NN`  | The street number of the address |
| `aaa` | The address addition (if given)  |
| `ZZ`  | The address zip code             |
| `ccc` | The city of the address          |

**Format Aliases:**

| Alias    | Format               |
| -------- | -------------------- |
| `full`   | `sss NN aaa, ZZ ccc` |
| `street` | `sss NN`             |
| `city`   | `zz ccc`             |

<br>

**`Example`**

```typescript
formatPostalAddress(obj, 'street'); // Foo St. 42a
```

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                    | Type                                                    | Default value | Description                                                               |
| :---------------------- | :------------------------------------------------------ | :------------ | :------------------------------------------------------------------------ |
| `obj`                   | `T`                                                     | `undefined`   | The object value to select the name information from                      |
| `format`                | `string`                                                | `'full'`      | The desired format to use for the output string value. Defaults to "full" |
| `options?`              | `Object`                                                | `undefined`   | Optional parameters that can be used during the format operation          |
| `options.additional?`   | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `string` | `undefined`   | -                                                                         |
| `options.city?`         | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `string` | `undefined`   | -                                                                         |
| `options.fallback?`     | `T`                                                     | `undefined`   | -                                                                         |
| `options.street?`       | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `string` | `undefined`   | -                                                                         |
| `options.streetNumber?` | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `string` | `undefined`   | -                                                                         |
| `options.zip?`          | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `string` | `undefined`   | -                                                                         |

#### Returns

`string`

---

### isAbsoluteURL

▸ **isAbsoluteURL**(`url`): `boolean`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `url` | `string` |

#### Returns

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

Returns whether a given value is a [Primitive](modules.md#primitive) or not

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `obj` | `any` |

#### Returns

obj is Primitive

---

### isSortOrder

▸ **isSortOrder**(`value`, `order?`): value is SortOrder

#### Parameters

| Name     | Type                                |
| :------- | :---------------------------------- |
| `value`  | `string`                            |
| `order?` | [`SortOrder`](modules.md#sortorder) |

#### Returns

value is SortOrder

---

### normalizeAbsoluteUrl

▸ **normalizeAbsoluteUrl**(`url`, `options?`): `string`

Normalizes an absolute url string value enforcing a protocol and an optional
path appendix. The protocol option will default to `https` if not overwritten

**`Remarks`**

This function does not support relative url values

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `url`               | `string` |
| `options?`          | `Object` |
| `options.path?`     | `string` |
| `options.protocol?` | `string` |

#### Returns

`string`

---

### normalizeUrl

▸ **normalizeUrl**(...`segments`): `string`

#### Parameters

| Name          | Type       |
| :------------ | :--------- |
| `...segments` | `string`[] |

#### Returns

`string`

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

### parseSortOrder

▸ **parseSortOrder**(`str`, `fallback?`): `undefined` \| [`SortOrder`](modules.md#sortorder)

#### Parameters

| Name        | Type                                |
| :---------- | :---------------------------------- |
| `str`       | `string`                            |
| `fallback?` | [`SortOrder`](modules.md#sortorder) |

#### Returns

`undefined` \| [`SortOrder`](modules.md#sortorder)

---

### parseSortState

▸ **parseSortState**(`str`): `undefined` \| `null` \| { `key`: `string` ; `order`: `undefined` \| [`SortOrder`](modules.md#sortorder) }

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `str` | `string` |

#### Returns

`undefined` \| `null` \| { `key`: `string` ; `order`: `undefined` \| [`SortOrder`](modules.md#sortorder) }

---

### queryObjectProp

▸ **queryObjectProp**<`T`, `O`\>(`obj`, `query`): `T`

Queries an object property value either by using a selector function or a path as described by [queryObjectPropPath](modules.md#queryobjectproppath)

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

### removeEmptyJsonProps

▸ **removeEmptyJsonProps**<`T`\>(`objOrArray`, `options?`): `Partial`<`T`\>

Removes all "empty" properties from the given json object and returns the "compressed" value.
The "empty" condition is given for any `null`, `undefined`, empty string, array or object
value, given it is not ignored

**`Example`**

```typescript
removeEmptyJsonProps(
  {
    emptyStr: '',
    emptyArr: [],
    emptyObj: {},
    empty: null,
    foo: 'bar',
  },
  { ignore: 'emptyString' }
); // { emptyStr: '', foo: 'bar' }
```

**`Remarks`**

Prototype inheritance won't be preserved, please use JSON only!

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name              | Type                                                                                                                                         | Description                                                        |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| `objOrArray`      | `T`                                                                                                                                          | The schema object value that should be "compressed"                |
| `options?`        | `Object`                                                                                                                                     | Optional configuration interface to ignore individual remove cases |
| `options.ignore?` | [`RemoveEmptyJsonPropTarget`](modules.md#removeemptyjsonproptarget) \| [`RemoveEmptyJsonPropTarget`](modules.md#removeemptyjsonproptarget)[] | -                                                                  |

#### Returns

`Partial`<`T`\>

---

### restoreFlatTree

▸ **restoreFlatTree**<`T`\>(`flatTree`): [`TreeNode`](modules.md#treenode) & `T`[]

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Parameters

| Name       | Type                                        |
| :--------- | :------------------------------------------ |
| `flatTree` | [`FlatTreeNode`](modules.md#flattreenode)[] |

#### Returns

[`TreeNode`](modules.md#treenode) & `T`[]

---

### reverseSortOrder

▸ **reverseSortOrder**(`order`): [`SortOrder`](modules.md#sortorder)

#### Parameters

| Name    | Type                                |
| :------ | :---------------------------------- |
| `order` | [`SortOrder`](modules.md#sortorder) |

#### Returns

[`SortOrder`](modules.md#sortorder)

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

| Name              | Type                                      | Description                                              |
| :---------------- | :---------------------------------------- | :------------------------------------------------------- |
| `obj`             | `T`                                       | The object instance to traverse through                  |
| `nextObjSelector` | (`obj`: `T`) => `any`                     | The "next" value selector function                       |
| `breakPredicate?` | [`Predicate`](modules.md#predicate)<`T`\> | Optional predicate to break the traversal operation with |

#### Returns

`T`

---

### trimJsonProps

▸ **trimJsonProps**<`T`\>(`obj`, `options?`): `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name               | Type                                    |
| :----------------- | :-------------------------------------- |
| `obj`              | `T`                                     |
| `options?`         | `Object`                                |
| `options.include?` | (`string` \| `RegExp`)[]                |
| `options.mode?`    | `"leading"` \| `"trailing"` \| `"both"` |

#### Returns

`T`
