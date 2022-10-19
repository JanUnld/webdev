[@janunld/angular](../README.md) / [Exports](../modules.md) / StringInterpolator

# Module: StringInterpolator

## Table of contents

### Classes

- [StringInterpolatePipe](../classes/StringInterpolator.StringInterpolatePipe.md)
- [StringInterpolator](../classes/StringInterpolator.StringInterpolator.md)

### Type Aliases

- [StringInterpolationReplaceFn](StringInterpolator.md#stringinterpolationreplacefn)
- [StringInterpolationScheme](StringInterpolator.md#stringinterpolationscheme)

### Variables

- [DOS_VAR_INTERPOLATION_SCHEME](StringInterpolator.md#dos_var_interpolation_scheme)
- [STRING_INTERPOLATION_REPLACER](StringInterpolator.md#string_interpolation_replacer)
- [STRING_INTERPOLATION_SCHEME](StringInterpolator.md#string_interpolation_scheme)
- [UNIX_VAR_INTERPOLATION_SCHEME](StringInterpolator.md#unix_var_interpolation_scheme)
- [URL_PARAM_INTERPOLATION_SCHEME](StringInterpolator.md#url_param_interpolation_scheme)

## Type Aliases

### StringInterpolationReplaceFn

**StringInterpolationReplaceFn**: (`params`: `any`, `match`: `string`, ...`groups`: `string`[]) => `string`

#### Type declaration

(`params`, `match`, ...`groups`): `string`

The [StringInterpolationReplaceFn](StringInterpolator.md#stringinterpolationreplacefn) used during string interpolation operations

##### Parameters

| Name        | Type       |
| :---------- | :--------- |
| `params`    | `any`      |
| `match`     | `string`   |
| `...groups` | `string`[] |

##### Returns

`string`

---

### StringInterpolationScheme

**StringInterpolationScheme**: `RegExp`

Describes a RegExp that matches and discovers context property names from a string. The
expression should bind the reference to the first captured group. It will always be executed
with a global `g` flag.

**`Remarks`**

See [STRING_INTERPOLATION_SCHEME](StringInterpolator.md#string_interpolation_scheme) summary for more information

## Variables

### DOS_VAR_INTERPOLATION_SCHEME

`Const` **DOS_VAR_INTERPOLATION_SCHEME**: [`StringInterpolationScheme`](StringInterpolator.md#stringinterpolationscheme)

A DOS [StringInterpolationScheme](StringInterpolator.md#stringinterpolationscheme) expression that will match any common DOS variable
notation styled values in the form of `%parameter%` while capturing the actual "context" property
name `parameter` inside the first expression group

---

### STRING_INTERPOLATION_REPLACER

`Const` **STRING_INTERPOLATION_REPLACER**: `InjectionToken`<[`StringInterpolationReplaceFn`](StringInterpolator.md#stringinterpolationreplacefn)\>

The [StringInterpolationReplaceFn](StringInterpolator.md#stringinterpolationreplacefn) used during the [interpolate](../classes/StringInterpolator.StringInterpolator.md#interpolate)
operation. By default, the replacer will exchange

---

### STRING_INTERPOLATION_SCHEME

`Const` **STRING_INTERPOLATION_SCHEME**: `InjectionToken`<`RegExp`\>

The [StringInterpolationScheme](StringInterpolator.md#stringinterpolationscheme) used during the [interpolate](../classes/StringInterpolator.StringInterpolator.md#interpolate)
operation. By default, this regular expression will match any common unix environment variable
notation styled values in the form of `$parameter` while capturing the actual "context" property
name `parameter` inside the first expression group

---

### UNIX_VAR_INTERPOLATION_SCHEME

`Const` **UNIX_VAR_INTERPOLATION_SCHEME**: [`StringInterpolationScheme`](StringInterpolator.md#stringinterpolationscheme)

A unix [StringInterpolationScheme](StringInterpolator.md#stringinterpolationscheme) expression that will match any common unix variable
notation styled values in the form of `$parameter` while capturing the actual "context" property
name `parameter` inside the first expression group

---

### URL_PARAM_INTERPOLATION_SCHEME

`Const` **URL_PARAM_INTERPOLATION_SCHEME**: [`StringInterpolationScheme`](StringInterpolator.md#stringinterpolationscheme)

An url [StringInterpolationScheme](StringInterpolator.md#stringinterpolationscheme) expression that will match any common url parameter
notation styled values in the form of `:parameter` while capturing the actual "context" property
name `parameter` inside the first expression group
