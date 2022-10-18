[@janunld/angular](../README.md) / [Exports](../modules.md) / [Encapsulation](../modules/Encapsulation.md) / TemplateEncapsulate

# Class: TemplateEncapsulate

[Encapsulation](../modules/Encapsulation.md).TemplateEncapsulate

## Hierarchy

- [`TemplateOutlet`](TemplateOutlet.TemplateOutlet.md)

  ↳ **`TemplateEncapsulate`**

## Implements

- `OnChanges`
- `OnDestroy`

## Table of contents

### Constructors

- [constructor](Encapsulation.TemplateEncapsulate.md#constructor)

### Properties

- [context](Encapsulation.TemplateEncapsulate.md#context)
- [encapsulationName](Encapsulation.TemplateEncapsulate.md#encapsulationname)
- [ngClass](Encapsulation.TemplateEncapsulate.md#ngclass)
- [ngStyle](Encapsulation.TemplateEncapsulate.md#ngstyle)
- [template](Encapsulation.TemplateEncapsulate.md#template)

### Accessors

- [encapsulation](Encapsulation.TemplateEncapsulate.md#encapsulation)
- [viewRef](Encapsulation.TemplateEncapsulate.md#viewref)

### Methods

- [ngDoCheck](Encapsulation.TemplateEncapsulate.md#ngdocheck)
- [ngOnChanges](Encapsulation.TemplateEncapsulate.md#ngonchanges)
- [ngOnDestroy](Encapsulation.TemplateEncapsulate.md#ngondestroy)

## Constructors

### constructor

**new TemplateEncapsulate**(`template`, `renderer`, `viewContainerRef`, `iterableDiffers`, `keyValueDiffers`, `injector`, `encapsulations`)

#### Parameters

| Name               | Type                                                                              |
| :----------------- | :-------------------------------------------------------------------------------- |
| `template`         | `TemplateRef`<`any`\>                                                             |
| `renderer`         | `Renderer2`                                                                       |
| `viewContainerRef` | `ViewContainerRef`                                                                |
| `iterableDiffers`  | `IterableDiffers`                                                                 |
| `keyValueDiffers`  | `KeyValueDiffers`                                                                 |
| `injector`         | `Injector`                                                                        |
| `encapsulations`   | [`TemplateEncapsulation`](../interfaces/Encapsulation.TemplateEncapsulation.md)[] |

#### Overrides

[TemplateOutlet](TemplateOutlet.TemplateOutlet.md).[constructor](TemplateOutlet.TemplateOutlet.md#constructor)

## Properties

### context

`Optional` **context**: `any`

#### Inherited from

[TemplateOutlet](TemplateOutlet.TemplateOutlet.md).[context](TemplateOutlet.TemplateOutlet.md#context)

---

### encapsulationName

`Optional` **encapsulationName**: `string`

---

### ngClass

**ngClass**: `undefined` \| `null` \| `string` \| `string`[] \| `Set`<`string`\> \| { `[klass: string]`: `any`; }

#### Inherited from

[TemplateOutlet](TemplateOutlet.TemplateOutlet.md).[ngClass](TemplateOutlet.TemplateOutlet.md#ngclass)

---

### ngStyle

**ngStyle**: `undefined` \| `null` \| { `[klass: string]`: `any`; }

#### Inherited from

[TemplateOutlet](TemplateOutlet.TemplateOutlet.md).[ngStyle](TemplateOutlet.TemplateOutlet.md#ngstyle)

---

### template

`Optional` **template**: `TemplateRef`<`any`\>

#### Inherited from

[TemplateOutlet](TemplateOutlet.TemplateOutlet.md).[template](TemplateOutlet.TemplateOutlet.md#template)

## Accessors

### encapsulation

`get` **encapsulation**(): `null` \| [`TemplateEncapsulation`](../interfaces/Encapsulation.TemplateEncapsulation.md)

#### Returns

`null` \| [`TemplateEncapsulation`](../interfaces/Encapsulation.TemplateEncapsulation.md)

---

### viewRef

`get` **viewRef**(): `null` \| `EmbeddedViewRef`<`T`\>

#### Returns

`null` \| `EmbeddedViewRef`<`T`\>

#### Inherited from

TemplateOutlet.viewRef

## Methods

### ngDoCheck

**ngDoCheck**(): `void`

#### Returns

`void`

#### Inherited from

[TemplateOutlet](TemplateOutlet.TemplateOutlet.md).[ngDoCheck](TemplateOutlet.TemplateOutlet.md#ngdocheck)

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

#### Overrides

[TemplateOutlet](TemplateOutlet.TemplateOutlet.md).[ngOnChanges](TemplateOutlet.TemplateOutlet.md#ngonchanges)

---

### ngOnDestroy

**ngOnDestroy**(): `void`

#### Returns

`void`

#### Implementation of

OnDestroy.ngOnDestroy

#### Overrides

[TemplateOutlet](TemplateOutlet.TemplateOutlet.md).[ngOnDestroy](TemplateOutlet.TemplateOutlet.md#ngondestroy)
