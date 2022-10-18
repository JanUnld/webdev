[@janunld/angular](../README.md) / [Exports](../modules.md) / [TemplateOutlet](../modules/TemplateOutlet.md) / TemplateOutlet

# Class: TemplateOutlet<T\>

[TemplateOutlet](../modules/TemplateOutlet.md).TemplateOutlet

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

- **`TemplateOutlet`**

  ↳ [`TemplateEncapsulate`](Encapsulation.TemplateEncapsulate.md)

## Implements

- `DoCheck`
- `OnChanges`
- `OnDestroy`

## Table of contents

### Constructors

- [constructor](TemplateOutlet.TemplateOutlet.md#constructor)

### Properties

- [context](TemplateOutlet.TemplateOutlet.md#context)
- [ngClass](TemplateOutlet.TemplateOutlet.md#ngclass)
- [ngStyle](TemplateOutlet.TemplateOutlet.md#ngstyle)
- [template](TemplateOutlet.TemplateOutlet.md#template)

### Accessors

- [viewRef](TemplateOutlet.TemplateOutlet.md#viewref)

### Methods

- [ngDoCheck](TemplateOutlet.TemplateOutlet.md#ngdocheck)
- [ngOnChanges](TemplateOutlet.TemplateOutlet.md#ngonchanges)
- [ngOnDestroy](TemplateOutlet.TemplateOutlet.md#ngondestroy)

## Constructors

### constructor

**new TemplateOutlet**<`T`\>(`renderer`, `iterableDiffers`, `keyValueDiffers`, `viewContainerRef`)

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name               | Type               |
| :----------------- | :----------------- |
| `renderer`         | `Renderer2`        |
| `iterableDiffers`  | `IterableDiffers`  |
| `keyValueDiffers`  | `KeyValueDiffers`  |
| `viewContainerRef` | `ViewContainerRef` |

## Properties

### context

`Optional` **context**: `T`

---

### ngClass

**ngClass**: `undefined` \| `null` \| `string` \| `string`[] \| `Set`<`string`\> \| { `[klass: string]`: `any`; }

---

### ngStyle

**ngStyle**: `undefined` \| `null` \| { `[klass: string]`: `any`; }

---

### template

`Optional` **template**: `TemplateRef`<`T`\>

## Accessors

### viewRef

`get` **viewRef**(): `null` \| `EmbeddedViewRef`<`T`\>

#### Returns

`null` \| `EmbeddedViewRef`<`T`\>

## Methods

### ngDoCheck

**ngDoCheck**(): `void`

#### Returns

`void`

#### Implementation of

DoCheck.ngDoCheck

---

### ngOnChanges

**ngOnChanges**(`changes`): `void`

#### Parameters

| Name      | Type            |
| :-------- | :-------------- |
| `changes` | `SimpleChanges` |

#### Returns

`void`

#### Implementation of

OnChanges.ngOnChanges

---

### ngOnDestroy

**ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy
