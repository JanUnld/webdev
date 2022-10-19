[@janunld/angular/forms](../README.md) / [Exports](../modules.md) / StepModel

# Module: StepModel

The `StepModel` class implementation aims to provide a modelling as well as
controlling functionality similar to the way `FormGroup`s and `FormControl`s
do for form related features. Individual step definitions may be constrained
by `StepCanActivate` or `StepCanDeactivate` guard predicates.

Now, let's assume we have a simple `FormGroup` model with a first name as
well as a last name control inside. Our desired step model would need a
`StepCanDeactivate` guard for steps that may not continue unless their form
is in valid. This attempt would be quite verbose in when it comes to more
complex `FormGroup` models.

```typescript
const { required } = Validators;

const formGroup = new FormGroup({
  firstName: new FormControl(),
  lastName: new FormControl(null, required),
});

const steps = new StepModel({
  first: {
    canDeactivate: [
      (dir: StepDirection, next: Step): Promise<boolean> | boolean => {
        const { firstName } = formGroup.controls;
        firstName.updateValueAndValidity({ onlySelf: true });
        return firstName.valid;
      },
    ],
  },
  second: {},
});
```

Therefore, the `StepModel` class also provides a way to directly input
`AbstractControl` references into the step definitions, automatically setting
up the common validity related constraints for forms, like showcased above.
Now this attempt would drastically reduce the code necessary in order to set
up our desired `StepModel`.

```typescript
const steps = new StepModel({
  first: formGroup.controls.firstName,
  second: formGroup.control.lastName,
});
```

Now this might bring up the question if and how to control these commonly
applied validity constraints. While defining individual steps you may
encounter additional options to pass in. Besides, the already known guards
that may additionally be attached, you can also set whether you want to
ignore the validity of the `Step.control` completely or not at all. By
default, any step definition is going to ignore their validity whenever the
navigation moves backwards. This means it will only check the validity when
moving forwards.

```typescript
const steps = new StepModel({
  first: {
    formControl: formGroup.control.firstName,
    ignoreValidity: 'forwards', // | 'backwards' | boolean
  },
  second: formGroup.control.lastName,
});
```

## Step Flags

Steps within a step model include a few implicit _status_ flags that change based on the activation and deactivation of the step itself. You may check whether a step was `touched`, meaning it did activate successfully at least once. In conjunction, you are also able to see if a step is `done`, basically describing that it did deactivate at least once successfully in a forwards direction.

```typescript
steps.get('first').touched; // true, due to being the initially activated step
steps.get('second').touched; // false
steps.get('first').done; // false

steps.next.activate();
steps.last.activate();

steps.get('first').done; // true
steps.get('second').touched; // true
```

You may also change these _status_ flags manually using the mark functions within the `Step` type.

```typescript
steps.get('second').markAsDone();

steps.get('second').done; // true
```

## Table of contents

### Classes

- [Step](../classes/StepModel.Step.md)
- [StepError](../classes/StepModel.StepError.md)
- [StepModel](../classes/StepModel.StepModel.md)

### Interfaces

- [StepActivateOptions](../interfaces/StepModel.StepActivateOptions.md)
- [StepGuardOptions](../interfaces/StepModel.StepGuardOptions.md)
- [StepOptions](../interfaces/StepModel.StepOptions.md)

### Type Aliases

- [StepCanActivate](StepModel.md#stepcanactivate)
- [StepCanDeactivate](StepModel.md#stepcandeactivate)
- [StepDirection](StepModel.md#stepdirection)
- [StepModelInput](StepModel.md#stepmodelinput)

### Functions

- [resolveStepDirection](StepModel.md#resolvestepdirection)

## Type Aliases

### StepCanActivate

**StepCanActivate**: (`direction`: [`StepDirection`](StepModel.md#stepdirection), `previous?`: [`Step`](../classes/StepModel.Step.md)) => `Promise`<`boolean`\> \| `boolean`

#### Type declaration

(`direction`, `previous?`): `Promise`<`boolean`\> \| `boolean`

##### Parameters

| Name        | Type                                          |
| :---------- | :-------------------------------------------- |
| `direction` | [`StepDirection`](StepModel.md#stepdirection) |
| `previous?` | [`Step`](../classes/StepModel.Step.md)        |

##### Returns

`Promise`<`boolean`\> \| `boolean`

---

### StepCanDeactivate

**StepCanDeactivate**: (`direction`: [`StepDirection`](StepModel.md#stepdirection), `next`: [`Step`](../classes/StepModel.Step.md)) => `Promise`<`boolean`\> \| `boolean`

#### Type declaration

(`direction`, `next`): `Promise`<`boolean`\> \| `boolean`

##### Parameters

| Name        | Type                                          |
| :---------- | :-------------------------------------------- |
| `direction` | [`StepDirection`](StepModel.md#stepdirection) |
| `next`      | [`Step`](../classes/StepModel.Step.md)        |

##### Returns

`Promise`<`boolean`\> \| `boolean`

---

### StepDirection

**StepDirection**: `"forwards"` \| `"backwards"`

---

### StepModelInput

**StepModelInput**: (`string` \| `AbstractControl` \| [`StepOptions`](../interfaces/StepModel.StepOptions.md))[] \| `Record`<`string`, `AbstractControl` \| [`StepOptions`](../interfaces/StepModel.StepOptions.md)\>

## Functions

### resolveStepDirection

**resolveStepDirection**(`previous`, `next`): [`StepDirection`](StepModel.md#stepdirection)

#### Parameters

| Name       | Type                                   |
| :--------- | :------------------------------------- |
| `previous` | [`Step`](../classes/StepModel.Step.md) |
| `next`     | [`Step`](../classes/StepModel.Step.md) |

#### Returns

[`StepDirection`](StepModel.md#stepdirection)
