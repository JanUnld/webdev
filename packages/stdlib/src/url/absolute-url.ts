import { normalizeUrl } from './normalize-url';

const PROTOCOL = new RegExp('^([\\w.-]+?:\\/{2})');

const URL_REGEX = new RegExp(
  `${PROTOCOL.source}?(\\d+\\.\\d+\\.\\d+\\.\\d+|[\\w.-]+\\.\\w+|localhost)(:\\d+)?`,
  'i'
);

/**
 * Detects whether a given url value is absolute or not, including variations of
 * protocol, domain, ip, port and path specifiers
 *
 * @example ```typescript
 * isAbsoluteURL('127.0.0.1') // true
 * isAbsoluteURL('localhost:8080') // true
 * isAbsoluteURL('ws://absolute.url') // true
 * isAbsoluteURL('custom://absolute.url') // true
 *
 * isAbsoluteURL('invalid:8080') // false
 * isAbsoluteURL('relative/url') // false
 * ```
 *
 * @param url The url string value to be checked
 */
export function isAbsoluteURL(url: string): boolean {
  return !!url && URL_REGEX.test(url);
}

/**
 * Normalizes an absolute url string value enforcing a protocol and an optional
 * path appendix. The protocol option will default to `https` if not overwritten
 *
 * @param url The url value to be normalized
 * @param options Options configuration interface
 * @param options.path Append as relative path value to the normalized url value
 * @param options.protocol Specified the protocol to be used, defaults to `"https"`
 *
 * @remarks This function does not support relative url values, use {@link normalizeUrl} for such purposes
 */
export function normalizeAbsoluteUrl(
  url: string,
  options?: { path?: string; protocol?: string }
): string {
  const { path, protocol } = options || {};

  if (path != null && !new RegExp(`${path}$`).test(url)) {
    url = `${url}/${path}`;
  }

  if (!PROTOCOL.test(url)) {
    if (!protocol) {
      url = `https://${url}`;
    } else {
      url = `${protocol}://${url}`;
    }
  }

  return normalizeUrl(url);
}
