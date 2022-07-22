# Module: String

## Table of contents

### Functions

- [format](String.md#format)
- [formatFullName](String.md#formatfullname)
- [formatPostalAddress](String.md#formatpostaladdress)

## Functions

### format

**format**<`T`\>(`value`, `options`): `string`

Formats an object into a human-readable string value based on the desired options. Options may customize the format
as well as the tokens that shall be used within the format.

**`Example`**

```typescript
format(date, {
  pattern: 'HH:mm',
  tokens: {
    HH: d => d?.getHours(),
    mm: d => d?.getMinutes(),
    // property keys do support regular expressions
    "s{2}": d => d?.getSeconds()
  }
})
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to be formatted into human-readable text |
| `options` | `Object` | Required options to return the desired formatted output |
| `options.fallback?` | `T` | - |
| `options.pattern` | `string` | - |
| `options.tokens` | `Object` | - |

#### Returns

`string`

___

### formatFullName

**formatFullName**<`T`\>(`obj`, `format?`, `options?`): `string`

Formats any object containing name information into a string. The string format can be provided
using the following tokens. If no format is present the pipe will default to "full". Additionally
any field can be backed up with a fallback value

**Format Tokens:**

| Token  | Description                                                   | Example      |
| ------ | ------------------------------------------------------------- | ------------ |
|  `FF`  | The fully quantified first name of the person                 | Jane, John   |
|  `ff`  | Shortened first letter format of the first name of the person | J.           |
|  `LL`  | The fully quantified last name of the person                  | Doe          |
|  `ll`  | Shortened first letter format of the last name of the person  | D.           |
|  `TT`  | The title of the person                                       | Dr.          |

**Format Aliases:**

| Alias       | Format     | Example       |
| ----------- | ---------- | ------------- |
| `full`      | `TT FF LL` | Dr. Jane Doe  |
| `short`     | `ff LL`    | J. Doe        |
| `shortLast` | `FF ll`    | Jane D.       |
| `reversed`  | `LL, FF`   | Doe, Jane     |
<br>

**`Example`**

```typescript
formatFullName(obj, 'reversed') // Doe, Jane
formatFullName(obj, 'TT ff LL') // Dr. J. Doe
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `T` | `undefined` | The object value to select the name information from |
| `format` | `string` | `'full'` | The desired format to use for the output string value. Defaults to "full" |
| `options?` | `Object` | `undefined` | Optional parameters that can be used during the format operation |
| `options.fallback?` | `T` | `undefined` | - |
| `options.firstName?` | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `string` | `undefined` | - |
| `options.lastName?` | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `string` | `undefined` | - |
| `options.title?` | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `string` | `undefined` | - |

#### Returns

`string`

___

### formatPostalAddress

**formatPostalAddress**<`T`\>(`obj`, `format?`, `options?`): `string`

Formats any object containing address information into a string. The string format can be provided
using the following tokens. If no format is present the pipe will default to "full". Additionally
any field can be backed up with a fallback value

**Format Tokens:**

| Token  | Description                        |
| ------ | ---------------------------------- |
| `sss`  | The street name of the address     |
| `NN`   | The street number of the address   |
| `aaa`  | The address addition (if given)    |
| `ZZ`   | The address zip code               |
| `ccc`  | The city of the address            |

**Format Aliases:**

| Alias       | Format               |
| ----------- | -------------------- |
| `full`      | `sss NN aaa, ZZ ccc` |
| `street`    | `sss NN`             |
| `city`      | `zz ccc`             |
<br>

**`Example`**

```typescript
formatPostalAddress(obj, 'street') // Foo St. 42a
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `T` | `undefined` | The object value to select the name information from |
| `format` | `string` | `'full'` | The desired format to use for the output string value. Defaults to "full" |
| `options?` | `Object` | `undefined` | Optional parameters that can be used during the format operation |
| `options.additional?` | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `string` | `undefined` | - |
| `options.city?` | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `string` | `undefined` | - |
| `options.fallback?` | `T` | `undefined` | - |
| `options.street?` | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `string` | `undefined` | - |
| `options.streetNumber?` | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `string` | `undefined` | - |
| `options.zip?` | `string` \| `PropertyKey`[] \| (`obj`: `T`) => `string` | `undefined` | - |

#### Returns

`string`
