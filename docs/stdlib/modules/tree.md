# Module: tree

## Table of contents

### Type Aliases

- [FlatTreeNode](tree.md#flattreenode)
- [TreeNode](tree.md#treenode)

### Functions

- [flattenTree](tree.md#flattentree)
- [restoreFlatTree](tree.md#restoreflattree)

## Type Aliases

### FlatTreeNode

Ƭ **FlatTreeNode**: `Object`

#### Type declaration

| Name          | Type      |
| :------------ | :-------- |
| `childCount?` | `number`  |
| `hasChildren` | `boolean` |
| `level`       | `number`  |

---

### TreeNode

Ƭ **TreeNode**: `Object`

#### Type declaration

| Name        | Type                             |
| :---------- | :------------------------------- |
| `children?` | [`TreeNode`](tree.md#treenode)[] |

## Functions

### flattenTree

▸ **flattenTree**<`T`\>(`tree`, `baseLevel?`): [`FlatTreeNode`](tree.md#flattreenode) & `T`[]

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Parameters

| Name         | Type                                                               |
| :----------- | :----------------------------------------------------------------- |
| `tree`       | [`TreeNode`](tree.md#treenode) \| [`TreeNode`](tree.md#treenode)[] |
| `baseLevel?` | `number`                                                           |

#### Returns

[`FlatTreeNode`](tree.md#flattreenode) & `T`[]

---

### restoreFlatTree

▸ **restoreFlatTree**<`T`\>(`flatTree`): [`TreeNode`](tree.md#treenode) & `T`[]

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Parameters

| Name       | Type                                     |
| :--------- | :--------------------------------------- |
| `flatTree` | [`FlatTreeNode`](tree.md#flattreenode)[] |

#### Returns

[`TreeNode`](tree.md#treenode) & `T`[]
