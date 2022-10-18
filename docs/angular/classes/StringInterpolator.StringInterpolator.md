[@janunld/angular](../README.md) / [Exports](../modules.md) / [StringInterpolator](../modules/StringInterpolator.md) / StringInterpolator

# Class: StringInterpolator

[StringInterpolator](../modules/StringInterpolator.md).StringInterpolator

## Table of contents

### Constructors

- [constructor](StringInterpolator.StringInterpolator.md#constructor)

### Properties

- [interpolationScheme](StringInterpolator.StringInterpolator.md#interpolationscheme)

### Methods

- [interpolate](StringInterpolator.StringInterpolator.md#interpolate)

## Constructors

### constructor

**new StringInterpolator**(`interpolationScheme`, `replacer`)

#### Parameters

| Name                  | Type                                                                                            |
| :-------------------- | :---------------------------------------------------------------------------------------------- |
| `interpolationScheme` | `RegExp`                                                                                        |
| `replacer`            | [`StringInterpolationReplaceFn`](../modules/StringInterpolator.md#stringinterpolationreplacefn) |

## Properties

### interpolationScheme

`Readonly` **interpolationScheme**: `RegExp`

## Methods

### interpolate

**interpolate**(`value`, `params`, `scheme?`, `replacer?`): `string`

Interpolates a given string value with any given context object. This
operation uses the provided [STRING_INTERPOLATION_SCHEME](../modules/StringInterpolator.md#string_interpolation_scheme) expression to
properly discover and replace target values as desired

#### Parameters

| Name       | Type                                                                                            | Description                                                                                                                         |
| :--------- | :---------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `value`    | `string`                                                                                        | The string value that should be interpolated                                                                                        |
| `params`   | `any`                                                                                           | The context to use for the interpolation resolution                                                                                 |
| `scheme`   | `RegExp`                                                                                        | Optional [StringInterpolationScheme](../modules/StringInterpolator.md#stringinterpolationscheme) to use for the interpolation       |
| `replacer` | [`StringInterpolationReplaceFn`](../modules/StringInterpolator.md#stringinterpolationreplacefn) | Optional [StringInterpolationReplaceFn](../modules/StringInterpolator.md#stringinterpolationreplacefn) to use for the interpolation |

#### Returns

`string`
