/** Distinctively filters a collection leaving only unique entries */
export const distinct = (it: unknown, i: number, arr: unknown[]) =>
  arr.indexOf(it) === i;

/** Distinctively filters a collection leaving only unique entries using a selector function */
export const distinctBy =
  <T>(selector: (it: T) => any) =>
  (it2: T, i: number, arr: T[]) =>
    arr.findIndex((it3) => selector(it2) === selector(it3)) === i;
