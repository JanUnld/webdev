import { omitProps } from './omit-props';

describe('omitProps', () => {
  it('can exclude property keys from an object', () => {
    const obj = omitProps({ foo: 'bar', bar: 'baz' }, 'bar');

    expect(obj.foo).toBe('bar');
    expect(obj).not.toHaveProperty('bar');
  });
  it('can exclude property keys from an array', () => {
    const arr = omitProps(['foo', 'bar'], 1);

    expect(arr).toHaveLength(1);
    expect(arr[0]).toBe('foo');
    expect(arr[1]).toBeUndefined();
  });
});
