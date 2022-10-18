[@janunld/angular](../README.md) / [Exports](../modules.md) / [EventManagerPlugin](../modules/EventManagerPlugin.md) / EventListenerOptionsPlugin

# Class: EventListenerOptionsPlugin

[EventManagerPlugin](../modules/EventManagerPlugin.md).EventListenerOptionsPlugin

Adds AddEventListenerOptions support to any event binding. Available
event listener options are "passive", "capture" and "once". They can be used
by simply adding the desired option name to the event binding like
`(click.once)="..."` or `(click.once.passive)="..."`. Chaining multiple
option names is provided out of the box

## Hierarchy

- [`EventManagerPlugin`](EventManagerPlugin.EventManagerPlugin.md)

  ↳ **`EventListenerOptionsPlugin`**

## Table of contents

### Constructors

- [constructor](EventManagerPlugin.EventListenerOptionsPlugin.md#constructor)

### Properties

- [manager](EventManagerPlugin.EventListenerOptionsPlugin.md#manager)

### Methods

- [addEventListener](EventManagerPlugin.EventListenerOptionsPlugin.md#addeventlistener)
- [supports](EventManagerPlugin.EventListenerOptionsPlugin.md#supports)

## Constructors

### constructor

**new EventListenerOptionsPlugin**()

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
