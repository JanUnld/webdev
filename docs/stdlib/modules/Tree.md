# Module: Tree

## Table of contents

### Type Aliases

- [FlatTreeNode](Tree.md#flattreenode)
- [TreeNode](Tree.md#treenode)

### Functions

- [flattenTree](Tree.md#flattentree)
- [restoreFlatTree](Tree.md#restoreflattree)

## Type Aliases

### FlatTreeNode

 **FlatTreeNode**: `Object`

Flat tree node representation requiring only a level and a child count number

#### Type declaration

| Name | Type |
| :------ | :------ |
| `childCount` | `number` |
| `level` | `number` |

___

### TreeNode

 **TreeNode**: `Object`

Nested tree node representation consisting only of children

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children?` | [`TreeNode`](Tree.md#treenode)[] |

## Functions

### flattenTree

**flattenTree**<`T`\>(`tree`, `baseLevel?`): [`FlatTreeNode`](Tree.md#flattreenode) & `T`[]

Flattens a tree structure based on a predefined [TreeNode](Tree.md#treenode) interface

**`Example`**

```typescript
// |- root node
//   |- child node
//   |- child node
flattenTree({ children: [ {}, {} ] })
// [
//   { level: 0, childCount: 2 },
//   { level: 1, childCount: 0 },
//   { level: 1, childCount: 0 },
// ]
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tree` | [`TreeNode`](Tree.md#treenode) \| [`TreeNode`](Tree.md#treenode)[] | The tree structure to be flattened |
| `baseLevel?` | `number` | The base level to be used when flattening |

#### Returns

[`FlatTreeNode`](Tree.md#flattreenode) & `T`[]

___

### restoreFlatTree

**restoreFlatTree**<`T`\>(`flatTree`): [`TreeNode`](Tree.md#treenode) & `T`[]

Restores a flat tree structure usually returned from a [flattenTree](Tree.md#flattentree) operation

**`Example`**

```typescript
restoreFlatTree([
  { level: 0, childCount: 2 },
  { level: 1, childCount: 0 },
  { level: 1, childCount: 0 },
])
// { children: [ {}, {} ] }
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `flatTree` | [`FlatTreeNode`](Tree.md#flattreenode)[] | The flat tree structure to be restored to a nested tree structure |

#### Returns

[`TreeNode`](Tree.md#treenode) & `T`[]
