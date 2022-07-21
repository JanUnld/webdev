import { formatText } from './format-text';

describe('formatText', () => {
  let obj = { foo: 'foo', bar: 'bar' };

  describe('options parameter cases', () => {
    const format = 'f-b';
    const tokens = {
      f: (o: any) => o?.foo,
      b: (o: any) => o?.bar,
    };
    const expected = `${obj.foo}-${obj.bar}`;

    it('should support format and token values', () => {
      expect(formatText(obj, { format, tokens })).toEqual(expected);
    });
    it('should support fallback values', () => {
      expect(formatText({} as any, { format, tokens, fallback: obj })).toEqual(
        expected
      );
    });
  });
});
