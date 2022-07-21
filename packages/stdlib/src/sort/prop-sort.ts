import { Sort } from './sort';

export type PropSortSelector<T> = (obj: T) => any;

export function compareObjectProps<T = any>(
  selector: PropSortSelector<T>,
  a: T,
  b: T
): number {
  const va = selector(a);
  const vb = selector(b);
  return va < vb ? -1 : va > vb ? 1 : 0;
}

export class PropSort<T = any> extends Sort<T> {
  constructor(readonly selector: PropSortSelector<T>) {
    super((a: T, b: T) => compareObjectProps(selector, a, b), 'ascending');
  }
}
