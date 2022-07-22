import { queryProp, queryPropPath } from './query-prop';

describe('queryPropPath', () => {
  describe('path parameter cases', () => {
    const obj = { foo: { bar: 'baz' } };

    it('should support dot (.) separated property keys', () => {
      expect(queryPropPath(obj, 'foo.bar')).toEqual('baz');
    });
    it('should support array path representations', () => {
      expect(queryPropPath(obj, ['foo', 'bar'])).toEqual('baz');
    });
  });
});

describe('queryProp', () => {
  describe('path parameter cases', () => {
    const obj = { foo: { bar: 'baz' } };

    it('should support selector functions', () => {
      expect(queryProp(obj, (o) => o.foo.bar)).toEqual('baz');
    });
    it('should support dot (.) separated property keys', () => {
      expect(queryProp(obj, 'foo.bar')).toEqual('baz');
    });
    it('should support array path representations', () => {
      expect(queryProp(obj, ['foo', 'bar'])).toEqual('baz');
    });
  });
});
