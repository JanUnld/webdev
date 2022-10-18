[@janunld/angular](../README.md) / [Exports](../modules.md) / [Sort](../modules/Sort.md) / SortParamParser

# Class: SortParamParser

[Sort](../modules/Sort.md).SortParamParser

## Table of contents

### Constructors

- [constructor](Sort.SortParamParser.md#constructor)

### Properties

- [defaultOrder](Sort.SortParamParser.md#defaultorder)

### Methods

- [parseParam](Sort.SortParamParser.md#parseparam)

## Constructors

### constructor

**new SortParamParser**(`defaultOrder`)

#### Parameters

| Name           | Type        |
| :------------- | :---------- |
| `defaultOrder` | `SortOrder` |

## Properties

### defaultOrder

`Readonly` **defaultOrder**: `SortOrder`

## Methods

### parseParam

**parseParam**(`str`, `defaultOrder?`): `null` \| [`SortState`](../interfaces/Sort.SortState.md)

#### Parameters

| Name           | Type        |
| :------------- | :---------- |
| `str`          | `string`    |
| `defaultOrder` | `SortOrder` |

#### Returns

`null` \| [`SortState`](../interfaces/Sort.SortState.md)
