export function _(t, r) {
  r = r != null ? r : {};
  if (Object.getOwnPropertyDescriptors) {
    Object.defineProperties(t, Object.getOwnPropertyDescriptors(r));
  } else {
    ((t) => {
      const r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        const e = Object.getOwnPropertySymbols(t);
        r.push.apply(r, e);
      }
      return r;
    })(Object(r)).forEach((e) => {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
    });
  }
  return t;
}
