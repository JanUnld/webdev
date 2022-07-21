# Module: url

## Table of contents

### Functions

- [isAbsoluteURL](url.md#isabsoluteurl)
- [normalizeAbsoluteUrl](url.md#normalizeabsoluteurl)
- [normalizeUrl](url.md#normalizeurl)

## Functions

### isAbsoluteURL

▸ **isAbsoluteURL**(`url`): `boolean`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `url` | `string` |

#### Returns

`boolean`

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
