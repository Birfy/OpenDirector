export function _(t, r, e) {
  if (r in t) {
    Object.defineProperty(t, r, {
      value: e,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    t[r] = e;
  }
  return t;
}
