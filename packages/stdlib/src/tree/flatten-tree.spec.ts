import { flattenTree, FlatTreeNode, restoreFlatTree, TreeNode } from './flatten-tree';

const tree: TreeNode = {
  /* 1 */ children: [
    {
      /* 2 */ children: [
        {
          /* 3 */ children: [
            {
              /* 4 */
            },
          ],
        },
      ],
    },
    {
      /* 5 */
      children: [
        {
          /* 6 */
        },
      ],
    },
    {
      /* 7 */
    },
  ],
};
let flatTree: FlatTreeNode[];
let restoredTree: TreeNode[];

describe('flattenTree', () => {
  flatTree = flattenTree(tree);

  it('can flatten a nested object tree structure', () => {
    expect(flatTree.length).toBe(7);
  });
  it('can properly aggregate flat node values (level, hasChildren, childCount)', () => {
    expect(flatTree[0].level).toBe(0);
    expect(flatTree[0].hasChildren).toBe(true);
    expect(flatTree[0].childCount).toBe(3);
  });
  it('can cleanup nested node children', () => {
    expect(flatTree[0]).not.toHaveProperty('children');
  });
});

describe('restoreFlatTree', () => {
  restoredTree = restoreFlatTree(flatTree);

  it('can restore a flat tree to a nested tree structure', () => {
    expect(restoredTree.length).toBe(1);
  });
  it('can properly restore the nested node children', () => {
    expect(restoredTree[0].children?.length).toBe(3);
    expect(restoredTree[0].children?.[0].children?.length).toBe(1);
  });
  it('can cleanup the aggregated flat node values (level, hasChildren, childCount)', () => {
    expect(restoredTree[0]).not.toHaveProperty('level');
    expect(restoredTree[0]).not.toHaveProperty('hasChildren');
    expect(restoredTree[0]).not.toHaveProperty('childCount');
  });
});
