# Module: Collection

## Table of contents

### Functions

- [distinct](Collection.md#distinct)
- [distinctBy](Collection.md#distinctby)

## Functions

### distinct

**distinct**(`value`, `index`, `array`): `boolean`

Distinctively filters a collection leaving only unique entries

**`Example`**

```typescript
[1, 1, 2].filter(distinct); // [ 1, 2 ]
```

#### Parameters

| Name    | Type        |
| :------ | :---------- |
| `value` | `unknown`   |
| `index` | `number`    |
| `array` | `unknown`[] |

#### Returns

`boolean`

---

### distinctBy

**distinctBy**<`T`\>(`selector`): (`value`: `T`, `i`: `number`, `arr`: `T`[]) => `boolean`

Creates a function that distinctively filters a collection leaving only unique entries
by a given property selector

**`Example`**

```typescript
[{ x: 1 }, { x: 1 }, { x: 2 }].filter(distinctBy('x')); // [ { x 1 }, { x: 2 } ]
```

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type                                                       |
| :--------- | :--------------------------------------------------------- |
| `selector` | `string` \| `PropertyKey`[] \| (`value`: `T`) => `unknown` |

#### Returns

`fn`

(`value`, `i`, `arr`): `boolean`

##### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `T`      |
| `i`     | `number` |
| `arr`   | `T`[]    |

##### Returns

`boolean`
