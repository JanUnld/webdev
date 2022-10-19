[@janunld/stdlib](../README.md) / [Exports](../modules.md) / URL

# Module: URL

## Table of contents

### Functions

- [isAbsoluteURL](URL.md#isabsoluteurl)
- [normalizeAbsoluteUrl](URL.md#normalizeabsoluteurl)
- [normalizeUrl](URL.md#normalizeurl)

## Functions

### isAbsoluteURL

**isAbsoluteURL**(`url`): `boolean`

Detects whether a given url value is absolute or not, including variations of
protocol, domain, ip, port and path specifiers

**`Example`**

```typescript
isAbsoluteURL('127.0.0.1'); // true
isAbsoluteURL('localhost:8080'); // true
isAbsoluteURL('ws://absolute.url'); // true
isAbsoluteURL('custom://absolute.url'); // true

isAbsoluteURL('invalid:8080'); // false
isAbsoluteURL('relative/url'); // false
```

#### Parameters

| Name  | Type     | Description                        |
| :---- | :------- | :--------------------------------- |
| `url` | `string` | The url string value to be checked |

#### Returns

`boolean`

---

### normalizeAbsoluteUrl

**normalizeAbsoluteUrl**(`url`, `options?`): `string`

Normalizes an absolute url string value enforcing a protocol and an optional
path appendix. The protocol option will default to `https` if not overwritten

**`Remarks`**

This function does not support relative url values, use [normalizeUrl](URL.md#normalizeurl) for such purposes

#### Parameters

| Name                | Type     | Description                                               |
| :------------------ | :------- | :-------------------------------------------------------- |
| `url`               | `string` | The url value to be normalized                            |
| `options?`          | `Object` | Options configuration interface                           |
| `options.path?`     | `string` | Append as relative path value to the normalized url value |
| `options.protocol?` | `string` | Specified the protocol to be used, defaults to `"https"`  |

#### Returns

`string`

---

### normalizeUrl

**normalizeUrl**(...`segments`): `string`

Normalizes an url string value enforcing consistent single slash usage

**`Example`**

```typescript
normalizeUrl('https://localhost:8080///relative//url'); // https://localhost:8080/relative/url
normalizeUrl('///relative//url'); // /relative/url
```

#### Parameters

| Name          | Type       | Description                                              |
| :------------ | :--------- | :------------------------------------------------------- |
| `...segments` | `string`[] | One or more url segments to be normalized into one value |

#### Returns

`string`
