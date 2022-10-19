[@janunld/angular](../README.md) / [Exports](../modules.md) / Encapsulation

# Module: Encapsulation

**`Example`**

```typescript
Component({
  selector: 'paragraph',
  template: `<ng-content></ng-content>`,
})(class ParagraphComponent {});

export const PARAGRAPH_ENCAPSULATION_PROVIDER: Provider = {
  provide: TEMPLATE_ENCAPSULATIONS,
  useValue: { name: 'p', container: ParagraphComponent },
  multi: true,
};
```

```html
<ng-container *encapsulate="'p'">Hello World!</ng-container>
```

```html
<paragraph>Hello World!</paragraph>
```

## Table of contents

### Classes

- [TemplateEncapsulate](../classes/Encapsulation.TemplateEncapsulate.md)
- [TemplateEncapsulationModule](../classes/Encapsulation.TemplateEncapsulationModule.md)

### Interfaces

- [TemplateEncapsulation](../interfaces/Encapsulation.TemplateEncapsulation.md)

### Variables

- [TEMPLATE_ENCAPSULATIONS](Encapsulation.md#template_encapsulations)

### Functions

- [provideTemplateEncapsulation](Encapsulation.md#providetemplateencapsulation)

## Variables

### TEMPLATE_ENCAPSULATIONS

`Const` **TEMPLATE_ENCAPSULATIONS**: `InjectionToken`<[`TemplateEncapsulation`](../interfaces/Encapsulation.TemplateEncapsulation.md)\>

## Functions

### provideTemplateEncapsulation

**provideTemplateEncapsulation**(`encapsulation`): `Provider`

#### Parameters

| Name            | Type                                                                            |
| :-------------- | :------------------------------------------------------------------------------ |
| `encapsulation` | [`TemplateEncapsulation`](../interfaces/Encapsulation.TemplateEncapsulation.md) |

#### Returns

`Provider`
