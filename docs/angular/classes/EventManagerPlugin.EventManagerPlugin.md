[@janunld/angular](../README.md) / [Exports](../modules.md) / [EventManagerPlugin](../modules/EventManagerPlugin.md) / EventManagerPlugin

# Class: EventManagerPlugin

[EventManagerPlugin](../modules/EventManagerPlugin.md).EventManagerPlugin

## Hierarchy

- **`EventManagerPlugin`**

  ↳ [`EventDebouncePlugin`](EventManagerPlugin.EventDebouncePlugin.md)

  ↳ [`EventListenerOptionsPlugin`](EventManagerPlugin.EventListenerOptionsPlugin.md)

  ↳ [`EventPreventionPlugin`](EventManagerPlugin.EventPreventionPlugin.md)

## Table of contents

### Constructors

- [constructor](EventManagerPlugin.EventManagerPlugin.md#constructor)

### Properties

- [manager](EventManagerPlugin.EventManagerPlugin.md#manager)

### Methods

- [addEventListener](EventManagerPlugin.EventManagerPlugin.md#addeventlistener)
- [supports](EventManagerPlugin.EventManagerPlugin.md#supports)

## Constructors

### constructor

**new EventManagerPlugin**()

## Properties

### manager

`Readonly` **manager**: `EventManager`

Gets the EventManager for the current [EventManagerPlugin](EventManagerPlugin.EventManagerPlugin.md)
instance

## Methods

### addEventListener

`Abstract` **addEventListener**(`element`, `eventExpr`, `listener`): [`EventUnlistener`](../modules/EventManagerPlugin.md#eventunlistener)

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

---

### supports

`Abstract` **supports**(`eventExpr`): `boolean`

Evaluates whether a given event name, including custom angular appendix, is
supported by the [EventManagerPlugin](EventManagerPlugin.EventManagerPlugin.md) instance

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `eventExpr` | `string` |

#### Returns

`boolean`
