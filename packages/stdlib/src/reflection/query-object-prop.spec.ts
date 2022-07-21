import { queryObjectProp, queryObjectPropPath } from './query-object-prop';

describe('queryObjectPropPath', () => {
  describe('path parameter cases', () => {
    const obj = { foo: { bar: 'baz' } };

    it('should support dot (.) separated property keys', () => {
      expect(queryObjectPropPath(obj, 'foo.bar')).toEqual('baz');
    });
    it('should support array path representations', () => {
      expect(queryObjectPropPath(obj, ['foo', 'bar'])).toEqual('baz');
    });
  });
});

describe('queryObjectProp', () => {
  describe('path parameter cases', () => {
    const obj = { foo: { bar: 'baz' } };

    it('should support selector functions', () => {
      expect(queryObjectProp(obj, (o) => o.foo.bar)).toEqual('baz');
    });
    it('should support dot (.) separated property keys', () => {
      expect(queryObjectProp(obj, 'foo.bar')).toEqual('baz');
    });
    it('should support array path representations', () => {
      expect(queryObjectProp(obj, ['foo', 'bar'])).toEqual('baz');
    });
  });
});
