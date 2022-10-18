[@janunld/angular](../README.md) / [Exports](../modules.md) / [EventManagerPlugin](../modules/EventManagerPlugin.md) / EventDebouncePlugin

# Class: EventDebouncePlugin

[EventManagerPlugin](../modules/EventManagerPlugin.md).EventDebouncePlugin

Adds support for debouncing events inline in template expressions. The expression syntax follows the
format `debounce@ms`, therefore the plugin may be used like `(change.debounce@250)="..."`

## Hierarchy

- [`EventManagerPlugin`](EventManagerPlugin.EventManagerPlugin.md)

  ↳ **`EventDebouncePlugin`**

## Table of contents

### Constructors

- [constructor](EventManagerPlugin.EventDebouncePlugin.md#constructor)

### Properties

- [manager](EventManagerPlugin.EventDebouncePlugin.md#manager)

### Methods

- [addEventListener](EventManagerPlugin.EventDebouncePlugin.md#addeventlistener)
- [supports](EventManagerPlugin.EventDebouncePlugin.md#supports)

## Constructors

### constructor

**new EventDebouncePlugin**()

#### Inherited from

[EventManagerPlugin](EventManagerPlugin.EventManagerPlugin.md).[constructor](EventManagerPlugin.EventManagerPlugin.md#constructor)

## Properties

### manager

`Readonly` **manager**: `EventManager`

Gets the EventManager for the current [EventManagerPlugin](EventManagerPlugin.EventManagerPlugin.md)
instance

#### Inherited from

[EventManagerPlugin](EventManagerPlugin.EventManagerPlugin.md).[manager](EventManagerPlugin.EventManagerPlugin.md#manager)

## Methods

### addEventListener

**addEventListener**(`element`, `eventExpr`, `listener`): [`EventUnlistener`](../modules/EventManagerPlugin.md#eventunlistener)

Attaches an event listener function to the event defined by the event name
parameter for the given target element. This function should return an
event "unlisten" function

#### Parameters

| Name        | Type                                                                      |
| :---------- | :------------------------------------------------------------------------ |
| `element`   | `Element`                                                                 |
| `eventExpr` | `string`                                                                  |
| `listener`  | [`EventListener`](../modules/EventManagerPlugin.md#eventlistener)<`any`\> |

#### Returns

[`EventUnlistener`](../modules/EventManagerPlugin.md#eventunlistener)

#### Overrides

[EventManagerPlugin](EventManagerPlugin.EventManagerPlugin.md).[addEventListener](EventManagerPlugin.EventManagerPlugin.md#addeventlistener)

---

### supports

**supports**(`eventExpr`): `boolean`

Evaluates whether a given event name, including custom angular appendix, is
supported by the [EventManagerPlugin](EventManagerPlugin.EventManagerPlugin.md) instance

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `eventExpr` | `string` |

#### Returns

`boolean`

#### Overrides

[EventManagerPlugin](EventManagerPlugin.EventManagerPlugin.md).[supports](EventManagerPlugin.EventManagerPlugin.md#supports)
