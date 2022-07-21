import { isAbsoluteURL, normalizeAbsoluteUrl } from './absolute-url';

describe('isAbsoluteUrl', () => {
  it('should detect absolute url value cases', () => {
    expect(isAbsoluteURL('127.0.0.1')).toBe(true);
    expect(isAbsoluteURL('127.0.0.1:8080')).toBe(true);
    expect(isAbsoluteURL('localhost:8080')).toBe(true);
    expect(isAbsoluteURL('http://localhost:8080')).toBe(true);
    expect(isAbsoluteURL('absolute.url')).toBe(true);
    expect(isAbsoluteURL('http://absolute.url')).toBe(true);
    expect(isAbsoluteURL('ws://absolute.url')).toBe(true);
    expect(isAbsoluteURL('custom://absolute.url')).toBe(true);
  });
  it('should detect non absolute url value cases', () => {
    expect(isAbsoluteURL('/relative/url')).toBe(false);
    expect(isAbsoluteURL('invalid:8080')).toBe(false);
  });
});

describe('normalizeAbsoluteUrl', () => {
  const value = 'absolute.url/without/protocol';

  it('should normalize absolute url values properly', () => {
    expect(normalizeAbsoluteUrl(value)).toEqual(`https://${value}`);
  });
  it('should allow to overwrite the url protocol to output', () => {
    expect(normalizeAbsoluteUrl(value, { protocol: 'http' })).toEqual(
      `http://${value}`
    );
  });
  it('should be able add a path appendix to the output', () => {
    expect(normalizeAbsoluteUrl(value, { path: '/path' })).toEqual(
      `https://${value}/path`
    );
  });
});
