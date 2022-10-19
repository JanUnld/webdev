[@janunld/angular](../README.md) / [Exports](../modules.md) / EventManagerPlugin

# Module: EventManagerPlugin

## Table of contents

### Classes

- [EventDebouncePlugin](../classes/EventManagerPlugin.EventDebouncePlugin.md)
- [EventListenerOptionsPlugin](../classes/EventManagerPlugin.EventListenerOptionsPlugin.md)
- [EventManagerPlugin](../classes/EventManagerPlugin.EventManagerPlugin.md)
- [EventPreventionPlugin](../classes/EventManagerPlugin.EventPreventionPlugin.md)

### Type Aliases

- [EventListener](EventManagerPlugin.md#eventlistener)
- [EventUnlistener](EventManagerPlugin.md#eventunlistener)

### Functions

- [provideEventDebouncePlugin](EventManagerPlugin.md#provideeventdebounceplugin)
- [provideEventListenerOptionsPlugin](EventManagerPlugin.md#provideeventlisteneroptionsplugin)
- [provideEventPreventionPlugin](EventManagerPlugin.md#provideeventpreventionplugin)

## Type Aliases

### EventListener

**EventListener**<`T`\>: (`event`: `Event`) => `T`

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Type declaration

(`event`): `T`

##### Parameters

| Name    | Type    |
| :------ | :------ |
| `event` | `Event` |

##### Returns

`T`

---

### EventUnlistener

**EventUnlistener**: () => `void`

#### Type declaration

(): `void`

##### Returns

`void`

## Functions

### provideEventDebouncePlugin

**provideEventDebouncePlugin**(): `Provider`

#### Returns

`Provider`

---

### provideEventListenerOptionsPlugin

**provideEventListenerOptionsPlugin**(): `Provider`

#### Returns

`Provider`

---

### provideEventPreventionPlugin

**provideEventPreventionPlugin**(): `Provider`

#### Returns

`Provider`
