import { omitProps } from '../json/omit-props';

/** Nested tree node representation consisting only of children */
export type TreeNode = {
  children?: TreeNode[];
};

/** Flat tree node representation requiring only a level and a child count number */
export type FlatTreeNode = {
  level: number;
  childCount: number;
};

/**
 * Flattens a tree structure based on a predefined {@link TreeNode} interface
 *
 * @example ```typescript
 * // |- root node
 * //   |- child node
 * //   |- child node
 * flattenTree({ children: [ {}, {} ] })
 * // [
 * //   { level: 0, childCount: 2 },
 * //   { level: 1, childCount: 0 },
 * //   { level: 1, childCount: 0 },
 * // ]
 * ```
 *
 * @param tree The tree structure to be flattened
 * @param baseLevel The base level to be used when flattening
 */
export function flattenTree<T = unknown>(
  tree: TreeNode | TreeNode[],
  baseLevel?: number
): (FlatTreeNode & T)[] {
  if (tree == null) return [];

  return (Array.isArray(tree) ? tree : [tree]).reduce((flatTree, node) => {
    let childTree: FlatTreeNode[] = [];

    const level = baseLevel ?? 0;
    let nodeClone = Object.assign({}, node);
    const children = Array.from(node.children || []);
    const descendants = children?.length;
    const hasChildren = descendants > 0;

    if (hasChildren) childTree = flattenTree<T>(children, level + 1);

    nodeClone = omitProps(nodeClone, 'children');

    const flatNode = {
      ...nodeClone,
      level,
      childCount: descendants,
    } as FlatTreeNode;
    return [...flatTree, flatNode, ...childTree];
  }, [] as FlatTreeNode[]) as (FlatTreeNode & T)[];
}

/**
 * Restores a flat tree structure usually returned from a {@link flattenTree} operation
 *
 * @example ```typescript
 * restoreFlatTree([
 *   { level: 0, childCount: 2 },
 *   { level: 1, childCount: 0 },
 *   { level: 1, childCount: 0 },
 * ])
 * // { children: [ {}, {} ] }
 * ```
 *
 * @param flatTree The flat tree structure to be restored to a nested tree structure
 */
export function restoreFlatTree<T = unknown>(
  flatTree: FlatTreeNode[]
): (TreeNode & T)[] {
  let workingIndex = 0;
  return (flatTree || []).reduce<TreeNode[]>((tree, flatNode, i) => {
    if (i < workingIndex) return tree;

    let lastChildIndex = i + 1;
    const nextNode = flatTree[lastChildIndex];
    const hasChildren =
      (nextNode && nextNode.level > flatNode.level) || flatNode.childCount > 0;
    const parentLevel = flatNode.level;

    const nodeClone = omitProps(flatNode, 'level', 'childCount');
    let nestedNode: TreeNode;
    if (hasChildren) {
      const descendants: FlatTreeNode[] = [];
      let nextChild: FlatTreeNode = nextNode;
      while (nextChild != null && nextChild.level > parentLevel) {
        descendants.push(nextChild);
        nextChild = flatTree[++lastChildIndex];
      }

      const children = restoreFlatTree(descendants);
      nestedNode = { ...nodeClone, children } as TreeNode;
    } else {
      nestedNode = nodeClone as TreeNode;
    }
    workingIndex = lastChildIndex;

    return [...tree, nestedNode];
  }, []) as (TreeNode & T)[];
}
