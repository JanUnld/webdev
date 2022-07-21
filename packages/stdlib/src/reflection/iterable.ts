/** Infers the iterator result type of an arbitrary {@link Iterable} type */
export type IteratorResult<T> = T extends Iterable<infer U> ? U : never;

/** Returns whether a given object is {@link Iterable} */
export function isIterable(
  obj: any
): obj is Iterable<IteratorResult<typeof obj>> {
  return obj != null && typeof obj[Symbol.iterator] === 'function';
}
