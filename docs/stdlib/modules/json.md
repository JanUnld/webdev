# Module: JSON

## Table of contents

### Type Aliases

- [EmptyJsonPropType](JSON.md#emptyjsonproptype)

### Functions

- [omitProps](JSON.md#omitprops)
- [queryProp](JSON.md#queryprop)
- [queryPropPath](JSON.md#queryproppath)
- [removeEmptyProps](JSON.md#removeemptyprops)
- [trimProps](JSON.md#trimprops)

## Type Aliases

### EmptyJsonPropType

**EmptyJsonPropType**: `"emptyString"` \| `"emptyArray"` \| `"emptyObject"` \| `"nullOrUndefined"`

Describes a type of empty property value that might appear within an object

## Functions

### omitProps

**omitProps**<`T`, `K`\>(`json`, ...`exclude`): `Omit`<`T`, `K`\>

Excludes one or more entries from the given object or array and returns the result

**`Example`**

```typescript
omitJsonProps({ foo: 'bar', bar: 'baz' }, 'bar'); // { foo: 'bar' }
```

**`Remarks`**

Prototype inheritance won't be preserved, please use JSON only!

#### Type parameters

| Name | Type                                     |
| :--- | :--------------------------------------- |
| `T`  | `T`                                      |
| `K`  | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name         | Type  | Description                                      |
| :----------- | :---- | :----------------------------------------------- |
| `json`       | `T`   | The object or array value be "compressed"        |
| `...exclude` | `K`[] | One or more desired property keys to be excluded |

#### Returns

`Omit`<`T`, `K`\>

---

### queryProp

**queryProp**<`R`, `T`\>(`json`, `query`): `R` \| `null`

Queries an object property value either by using a selector function or a path as described by [queryPropPath](JSON.md#queryproppath)

**`Example`**

```typescript
queryObjectProp(obj, '0.prop1.1.prop2');
queryObjectProp(obj, [0, 'prop1', 1, 'prop2']);
queryObjectProp(obj, (o) => o?.[0]?.prop1?.[1]?.prop2);
```

#### Type parameters

| Name |
| :--- |
| `R`  |
| `T`  |

#### Parameters

| Name    | Type                                                     | Description                                                                               |
| :------ | :------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| `json`  | `T`                                                      | The targeted object or array to resolve the path from                                     |
| `query` | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `unknown` | The desired query function or property path as explicit array or dot (.) separated string |

#### Returns

`R` \| `null`

---

### queryPropPath

**queryPropPath**<`R`, `T`\>(`json`, `path`): `R` \| `null`

Queries an object property value by its path in the format `prop1.prop2.prop3` also including out of the
box support for index based signatures e.g. `0.prop1.1.prop2`. The resolution is performed in a null safe manner,
not breaking but returning when discovering such an undefined case

**`Example`**

```typescript
queryObjectPropPath(obj, '0.prop1.1.prop2');
queryObjectPropPath(obj, [0, 'prop1', 1, 'prop2']);
```

#### Type parameters

| Name |
| :--- |
| `R`  |
| `T`  |

#### Parameters

| Name   | Type                        | Description                                                             |
| :----- | :-------------------------- | :---------------------------------------------------------------------- |
| `json` | `T`                         | The targeted object or array to resolve the path from                   |
| `path` | `string` \| `PropertyKey`[] | The desired property path as explicit array or dot (.) separated string |

#### Returns

`R` \| `null`

---

### removeEmptyProps

**removeEmptyProps**<`T`\>(`json`, `options?`): `Partial`<`T`\>

Removes all "empty" properties from the given json object and returns the "compressed" value.
The "empty" condition is given for [EmptyJsonPropType](JSON.md#emptyjsonproptype)

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

| Name                 | Type                                                                                                   | Description                                                  |
| :------------------- | :----------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| `json`               | `T`                                                                                                    | The object or array value that should be "compressed"        |
| `options?`           | `Object`                                                                                               | Optional configuration interface                             |
| `options.ignore?`    | [`EmptyJsonPropType`](JSON.md#emptyjsonproptype) \| [`EmptyJsonPropType`](JSON.md#emptyjsonproptype)[] | Excludes one or more empty property cases from being removed |
| `options.recursive?` | `boolean`                                                                                              | May disable the default recursion of this function           |

#### Returns

`Partial`<`T`\>

---

### trimProps

**trimProps**<`T`\>(`json`, `options?`): `T`

Trims any object or array string property values within an object or array, these may include
both leading and trailing white spaces by default. This behavior may be configured using
additional options

**`Example`**

```typescript
trimJsonProps({ foo: '  bar   ' }); // { foo: 'bar' }
trimJsonProps({ foo: '  bar   ' }, { mode: 'trailing' }); // { foo: '  bar' }
trimJsonProps({ foo: '  bar----------' }, { include: ['-'] }); // { foo: 'bar' }
```

**`Remarks`**

Prototype inheritance won't be preserved, please use JSON only!

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                 | Type                                    | Description                                                                 |
| :------------------- | :-------------------------------------- | :-------------------------------------------------------------------------- |
| `json`               | `T`                                     | The desired object or array value to be trimmed                             |
| `options?`           | `Object`                                | Optional configuration interface                                            |
| `options.include?`   | (`string` \| `RegExp`)[]                | Adds more expressions to be trimmed while still depending on the given mode |
| `options.mode?`      | `"leading"` \| `"trailing"` \| `"both"` | Changes the trim mode to either leading or trailing                         |
| `options.recursive?` | `boolean`                               | May disable the default recursion of this function                          |

#### Returns

`T`
