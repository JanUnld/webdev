/** Union for primitive value types such as {@link boolean}, {@link number}, {@link string} or {@link symbol} */
export type Primitive = boolean | number | string | symbol;

/** Returns whether a given value is a {@link Primitive} or not */
export function isPrimitive(obj: any): obj is Primitive {
  const t = typeof obj;
  return t === 'boolean' || t === 'number' || t === 'string' || t === 'symbol';
}
