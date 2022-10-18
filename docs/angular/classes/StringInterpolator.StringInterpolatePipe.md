[@janunld/angular](../README.md) / [Exports](../modules.md) / [StringInterpolator](../modules/StringInterpolator.md) / StringInterpolatePipe

# Class: StringInterpolatePipe

[StringInterpolator](../modules/StringInterpolator.md).StringInterpolatePipe

## Implements

- `PipeTransform`

## Table of contents

### Constructors

- [constructor](StringInterpolator.StringInterpolatePipe.md#constructor)

### Properties

- [interpolationScheme](StringInterpolator.StringInterpolatePipe.md#interpolationscheme)
- [interpolator](StringInterpolator.StringInterpolatePipe.md#interpolator)

### Methods

- [transform](StringInterpolator.StringInterpolatePipe.md#transform)

## Constructors

### constructor

**new StringInterpolatePipe**(`interpolator`, `interpolationScheme`, `replacer`)

#### Parameters

| Name                  | Type                                                                                            |
| :-------------------- | :---------------------------------------------------------------------------------------------- |
| `interpolator`        | [`StringInterpolator`](StringInterpolator.StringInterpolator.md)                                |
| `interpolationScheme` | `RegExp`                                                                                        |
| `replacer`            | [`StringInterpolationReplaceFn`](../modules/StringInterpolator.md#stringinterpolationreplacefn) |

## Properties

### interpolationScheme

`Readonly` **interpolationScheme**: `RegExp`

---

### interpolator

`Readonly` **interpolator**: [`StringInterpolator`](StringInterpolator.StringInterpolator.md)

## Methods

### transform

**transform**(`value`, `params`, `scheme?`, `replacer?`): `string`

#### Parameters

| Name       | Type                                                                                            |
| :--------- | :---------------------------------------------------------------------------------------------- |
| `value`    | `string`                                                                                        |
| `params`   | `any`                                                                                           |
| `scheme`   | `RegExp`                                                                                        |
| `replacer` | [`StringInterpolationReplaceFn`](../modules/StringInterpolator.md#stringinterpolationreplacefn) |

#### Returns

`string`

#### Implementation of

PipeTransform.transform
