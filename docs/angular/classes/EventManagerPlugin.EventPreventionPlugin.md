[@janunld/angular](../README.md) / [Exports](../modules.md) / [EventManagerPlugin](../modules/EventManagerPlugin.md) / EventPreventionPlugin

# Class: EventPreventionPlugin

[EventManagerPlugin](../modules/EventManagerPlugin.md).EventPreventionPlugin

Adds support for event prevention shortcuts to event template expressions. Prevention methods
are `preventDefault`, `stopPropagation` and `stopImmediatePropagation`, thus they are available
as shortcut like `(click.preventDefault)="..."` or `(click.stopPropagation)="..."`. Multiple shortcuts are
also allowed, e.g. `(mouseup.preventDefault.stopImmediatePropagation)="..."`

## Hierarchy

- [`EventManagerPlugin`](EventManagerPlugin.EventManagerPlugin.md)

  ↳ **`EventPreventionPlugin`**

## Table of contents

### Constructors

- [constructor](EventManagerPlugin.EventPreventionPlugin.md#constructor)

### Properties

- [manager](EventManagerPlugin.EventPreventionPlugin.md#manager)

### Methods

- [addEventListener](EventManagerPlugin.EventPreventionPlugin.md#addeventlistener)
- [supports](EventManagerPlugin.EventPreventionPlugin.md#supports)

## Constructors

### constructor

**new EventPreventionPlugin**()

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
