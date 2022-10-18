[@janunld/angular](../README.md) / [Exports](../modules.md) / EventManagerPlugin

# Module: EventManagerPlugin

## Table of contents

### Classes

- [EventDebouncePlugin](../classes/EventManagerPlugin.EventDebouncePlugin.md)
- [EventDebouncePluginModule](../classes/EventManagerPlugin.EventDebouncePluginModule.md)
- [EventListenerOptionsPlugin](../classes/EventManagerPlugin.EventListenerOptionsPlugin.md)
- [EventListenerOptionsPluginModule](../classes/EventManagerPlugin.EventListenerOptionsPluginModule.md)
- [EventManagerPlugin](../classes/EventManagerPlugin.EventManagerPlugin.md)
- [EventPreventionPlugin](../classes/EventManagerPlugin.EventPreventionPlugin.md)
- [EventPreventionPluginModule](../classes/EventManagerPlugin.EventPreventionPluginModule.md)

### Type Aliases

- [EventListener](EventManagerPlugin.md#eventlistener)
- [EventUnlistener](EventManagerPlugin.md#eventunlistener)

### Variables

- [EVENT_DEBOUNCE_PLUGIN_PROVIDER](EventManagerPlugin.md#event_debounce_plugin_provider)
- [EVENT_LISTENER_OPTIONS_PLUGIN_PROVIDER](EventManagerPlugin.md#event_listener_options_plugin_provider)
- [EVENT_PREVENTION_PLUGIN_PROVIDER](EventManagerPlugin.md#event_prevention_plugin_provider)

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

## Variables

### EVENT_DEBOUNCE_PLUGIN_PROVIDER

`Const` **EVENT_DEBOUNCE_PLUGIN_PROVIDER**: `Provider`

Holds the necessary dependency information to provide the
[EventDebouncePlugin](../classes/EventManagerPlugin.EventDebouncePlugin.md) to any desired module context

---

### EVENT_LISTENER_OPTIONS_PLUGIN_PROVIDER

`Const` **EVENT_LISTENER_OPTIONS_PLUGIN_PROVIDER**: `Provider`

Holds the necessary dependency information to provide the
[EventListenerOptionsPlugin](../classes/EventManagerPlugin.EventListenerOptionsPlugin.md) to any desired module context

---

### EVENT_PREVENTION_PLUGIN_PROVIDER

`Const` **EVENT_PREVENTION_PLUGIN_PROVIDER**: `Provider`

Holds the necessary dependency information to provide the
[EventPreventionPlugin](../classes/EventManagerPlugin.EventPreventionPlugin.md) to any desired module context
