export function normalizeUrl(...segments: string[]): string {
  // replace any double slash occurrences apart from those being part
  // of any potential protocol declaration
  return segments.join('/').replace(/(?<!\w+:)\/{2,}/, '/');
}
