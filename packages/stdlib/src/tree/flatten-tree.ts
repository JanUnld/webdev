import { omit } from '../reflection/omit';

export interface TreeNode {
  children?: TreeNode[];
}

export interface FlatTreeNode {
  level: number;
  hasChildren: boolean;
  childCount?: number;
}

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

    nodeClone = omit(nodeClone, 'children');

    const flatNode = {
      ...nodeClone,
      level,
      hasChildren,
      childCount: descendants,
    } as FlatTreeNode;
    return [...flatTree, flatNode, ...childTree];
  }, [] as FlatTreeNode[]) as (FlatTreeNode & T)[];
}

export function restoreFlatTree<T = unknown>(
  flatTree: FlatTreeNode[]
): (TreeNode & T)[] {
  let workingIndex = 0;
  return (flatTree || []).reduce<TreeNode[]>((tree, flatNode, i) => {
    if (i < workingIndex) return tree;

    let lastChildIndex = i + 1;
    const nextNode = flatTree[lastChildIndex];
    const hasChildren =
      (nextNode && nextNode.level > flatNode.level) || flatNode.hasChildren;
    const parentLevel = flatNode.level;

    const nodeClone = omit(flatNode, 'level', 'hasChildren', 'childCount');
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
