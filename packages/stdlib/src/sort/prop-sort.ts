import { Sort } from './sort';
import { queryObjectProp } from '../reflection/query-object-prop';

export function compareObjectProps<T = any>(
  selector: ((o: T) => any) | PropertyKey[] | string,
  a: T,
  b: T
): number {
  const va = queryObjectProp(a, selector);
  const vb = queryObjectProp(b, selector);
  return va < vb ? -1 : va > vb ? 1 : 0;
}

export class PropSort<T = any> extends Sort<T> {
  constructor(readonly selector: ((o: T) => any) | PropertyKey[] | string) {
    super((a: T, b: T) => compareObjectProps(selector, a, b), 'ascending');
  }
}
