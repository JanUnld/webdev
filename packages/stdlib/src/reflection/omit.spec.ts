import { omit } from './omit';

describe('omit', () => {
  const foo = { bar: 'bar', baz: 42 };

  it('can omit the desired property keys from an object', () => {
    const obj = omit(foo, 'bar');

    expect(obj).not.toHaveProperty('bar');
    expect(obj.baz).toBe(42);
  });
});
