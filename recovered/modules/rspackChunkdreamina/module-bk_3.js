export function _(t, e) {
  e = e != null ? e : {};
  if (Object.getOwnPropertyDescriptors) {
    Object.defineProperties(t, Object.getOwnPropertyDescriptors(e));
  } else {
    ((t) => {
      const e = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        const r = Object.getOwnPropertySymbols(t);
        e.push.apply(e, r);
      }
      return e;
    })(Object(e)).forEach((r) => {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return t;
}
