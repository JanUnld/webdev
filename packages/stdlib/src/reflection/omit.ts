export function omit<T, K extends keyof T>(obj: T, ...exclude: K[]) {
  return Object.entries(obj)
    .filter(([propKey]) => !exclude?.includes(propKey as K))
    .reduce((newObj, [propKey, propValue]) => {
      return { ...newObj, [propKey]: propValue };
    }, {} as Omit<T, K>);
}
