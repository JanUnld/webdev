import { format } from './format';

describe('format', () => {
  let obj = { foo: 'foo', bar: 'bar' };

  describe('options parameter cases', () => {
    const pattern = 'ff-bb';
    const tokens = {
      ff: (o: any) => o?.foo,
      bb: (o: any) => o?.bar,
    };

    it('should support pattern and token values', () => {
      expect(format(obj, { pattern, tokens })).toEqual('foo-bar');
    });
    it('should support a fallback value', () => {
      expect(format(null, { pattern, tokens, fallback: obj })).toEqual(
        'foo-bar'
      );
    });
  });
});
