# Module: json

## Table of contents

### Type Aliases

- [RemoveEmptyJsonPropTarget](json.md#removeemptyjsonproptarget)

### Functions

- [removeEmptyJsonProps](json.md#removeemptyjsonprops)
- [trimJsonProps](json.md#trimjsonprops)

## Type Aliases

### RemoveEmptyJsonPropTarget

Ƭ **RemoveEmptyJsonPropTarget**: `"emptyString"` \| `"emptyArray"` \| `"emptyObject"` \| `"nullOrUndefined"`

## Functions

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

| Name              | Type                                                                                                                                   | Description                                                        |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| `objOrArray`      | `T`                                                                                                                                    | The schema object value that should be "compressed"                |
| `options?`        | `Object`                                                                                                                               | Optional configuration interface to ignore individual remove cases |
| `options.ignore?` | [`RemoveEmptyJsonPropTarget`](json.md#removeemptyjsonproptarget) \| [`RemoveEmptyJsonPropTarget`](json.md#removeemptyjsonproptarget)[] | -                                                                  |

#### Returns

`Partial`<`T`\>

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
