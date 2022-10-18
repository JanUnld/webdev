[@janunld/angular/forms](../README.md) / [Exports](../modules.md) / [StepModel](../modules/StepModel.md) / StepOptions

# Interface: StepOptions

[StepModel](../modules/StepModel.md).StepOptions

## Table of contents

### Properties

- [canActivate](StepModel.StepOptions.md#canactivate)
- [canDeactivate](StepModel.StepOptions.md#candeactivate)
- [formControl](StepModel.StepOptions.md#formcontrol)
- [ignoreValidity](StepModel.StepOptions.md#ignorevalidity)
- [name](StepModel.StepOptions.md#name)

## Properties

### canActivate

`Optional` **canActivate**: [`StepCanActivate`](../modules/StepModel.md#stepcanactivate)[]

Defines a list of predicate functions that resolves whether the [Step](../classes/StepModel.Step.md) can be activated or not. This
evaluation will always be executed when calling [StepModel](../classes/StepModel.StepModel.md) or [Step](../classes/StepModel.Step.md) functions

---

### canDeactivate

`Optional` **canDeactivate**: [`StepCanDeactivate`](../modules/StepModel.md#stepcandeactivate)[]

Defines a list of predicate functions that resolves whether the [Step](../classes/StepModel.Step.md) can be deactivated or not. This
evaluation will always be executed when calling [StepModel](../classes/StepModel.StepModel.md) or [Step](../classes/StepModel.Step.md) functions

---

### formControl

`Optional` **formControl**: `AbstractControl`<`any`, `any`\>

Defines an optional form control to "bind" the step to

---

### ignoreValidity

`Optional` **ignoreValidity**: `boolean` \| [`StepDirection`](../modules/StepModel.md#stepdirection)

Defines whether to ignore the validity of the [formControl](StepModel.StepOptions.md#formcontrol). The value can either be `true`, to fully ignore
the control validity during step activations or to a particular [StepDirection](../modules/StepModel.md#stepdirection) to still be able to constrain
one direction to the validity. This field **will be ignored** if no [formControl](StepModel.StepOptions.md#formcontrol) is present

---

### name

`Optional` **name**: `string`
