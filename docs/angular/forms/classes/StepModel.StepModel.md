[@janunld/angular/forms](../README.md) / [Exports](../modules.md) / [StepModel](../modules/StepModel.md) / StepModel

# Class: StepModel

[StepModel](../modules/StepModel.md).StepModel

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

## Hierarchy

- `Observable`<[`Step`](StepModel.Step.md) \| `null`\>

  ↳ **`StepModel`**

## Implements

- `Iterable`<[`Step`](StepModel.Step.md)\>

## Table of contents

### Constructors

- [constructor](StepModel.StepModel.md#constructor)

### Accessors

- [active](StepModel.StepModel.md#active)
- [first](StepModel.StepModel.md#first)
- [last](StepModel.StepModel.md#last)
- [next](StepModel.StepModel.md#next)
- [previous](StepModel.StepModel.md#previous)

### Methods

- [[iterator]](StepModel.StepModel.md#[iterator])
- [activate](StepModel.StepModel.md#activate)
- [get](StepModel.StepModel.md#get)
- [indexOf](StepModel.StepModel.md#indexof)
- [isActive](StepModel.StepModel.md#isactive)
- [reset](StepModel.StepModel.md#reset)

## Constructors

### constructor

**new StepModel**(`model`)

#### Parameters

| Name    | Type                                                       |
| :------ | :--------------------------------------------------------- |
| `model` | [`StepModelInput`](../modules/StepModel.md#stepmodelinput) |

#### Overrides

Observable&lt;Step \| null\&gt;.constructor

## Accessors

### active

`get` **active**(): `null` \| [`Step`](StepModel.Step.md)

#### Returns

`null` \| [`Step`](StepModel.Step.md)

---

### first

`get` **first**(): `null` \| [`Step`](StepModel.Step.md)

#### Returns

`null` \| [`Step`](StepModel.Step.md)

---

### last

`get` **last**(): `null` \| [`Step`](StepModel.Step.md)

#### Returns

`null` \| [`Step`](StepModel.Step.md)

---

### next

`get` **next**(): `null` \| [`Step`](StepModel.Step.md)

#### Returns

`null` \| [`Step`](StepModel.Step.md)

---

### previous

`get` **previous**(): `null` \| [`Step`](StepModel.Step.md)

#### Returns

`null` \| [`Step`](StepModel.Step.md)

## Methods

### [iterator]

**[iterator]**(): `Iterator`<[`Step`](StepModel.Step.md), `any`, `undefined`\>

#### Returns

`Iterator`<[`Step`](StepModel.Step.md), `any`, `undefined`\>

#### Implementation of

Iterable.\_\_@iterator@34

---

### activate

**activate**(`stepOrNameOrIndex`, `options?`): `Promise`<`void`\>

#### Parameters

| Name                | Type                                                                    |
| :------------------ | :---------------------------------------------------------------------- |
| `stepOrNameOrIndex` | `string` \| `number` \| [`Step`](StepModel.Step.md)                     |
| `options?`          | [`StepActivateOptions`](../interfaces/StepModel.StepActivateOptions.md) |

#### Returns

`Promise`<`void`\>

---

### get

**get**(`stepNameOrIndex`): `null` \| [`Step`](StepModel.Step.md)

#### Parameters

| Name              | Type                 |
| :---------------- | :------------------- |
| `stepNameOrIndex` | `string` \| `number` |

#### Returns

`null` \| [`Step`](StepModel.Step.md)

---

### indexOf

**indexOf**(`stepOrName`): `number`

#### Parameters

| Name         | Type                                    |
| :----------- | :-------------------------------------- |
| `stepOrName` | `string` \| [`Step`](StepModel.Step.md) |

#### Returns

`number`

---

### isActive

**isActive**(`stepOrNameOrIndex`): `boolean`

#### Parameters

| Name                | Type                                                |
| :------------------ | :-------------------------------------------------- |
| `stepOrNameOrIndex` | `string` \| `number` \| [`Step`](StepModel.Step.md) |

#### Returns

`boolean`

---

### reset

**reset**(`model`): `void`

#### Parameters

| Name    | Type                                                       |
| :------ | :--------------------------------------------------------- |
| `model` | [`StepModelInput`](../modules/StepModel.md#stepmodelinput) |

#### Returns

`void`
