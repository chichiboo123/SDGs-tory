function toBase64Url(value) {
  return btoa(unescape(encodeURIComponent(value)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

function fromBase64Url(value) {
  const normalized = value
    .replace(/-/g, '+')
    .replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);
  return decodeURIComponent(escape(atob(padded)));
}

export function encodeShareState(payload) {
  return toBase64Url(JSON.stringify(payload));
}

export function decodeShareState(encoded) {
  try {
    const json = fromBase64Url(encoded);
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export function buildShareUrl(payload) {
  const url = new URL(window.location.href);
  const encoded = encodeShareState(payload);
  url.searchParams.set('state', encoded);
  return url.toString();
}
