export function _(t, e, r) {
  if (e in t) {
    Object.defineProperty(t, e, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    t[e] = r;
  }
  return t;
}
