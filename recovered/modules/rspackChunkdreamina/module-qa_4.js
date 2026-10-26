export function _(t, e) {
  if (t == null) {
    return {};
  }
  let r;
  let n;
  let i;
  let a = {};
  if (typeof Reflect !== "undefined" && Reflect.ownKeys) {
    r = Reflect.ownKeys(Object(t));
    for (i = 0; i < r.length; i++) {
      n = r[i];
      if (
        !(e.indexOf(n) >= 0) &&
        Object.prototype.propertyIsEnumerable.call(t, n)
      ) {
        a[n] = t[n];
      }
    }
    return a;
  }
  a = ((t, e) => {
    if (t == null) {
      return {};
    }
    let r;
    let n;
    const i = {};
    const a = Object.getOwnPropertyNames(t);
    for (n = 0; n < a.length; n++) {
      r = a[n];
      if (
        !(e.indexOf(r) >= 0) &&
        Object.prototype.propertyIsEnumerable.call(t, r)
      ) {
        i[r] = t[r];
      }
    }
    return i;
  })(t, e);
  if (Object.getOwnPropertySymbols) {
    r = Object.getOwnPropertySymbols(t);
    for (i = 0; i < r.length; i++) {
      n = r[i];
      if (
        !(e.indexOf(n) >= 0) &&
        Object.prototype.propertyIsEnumerable.call(t, n)
      ) {
        a[n] = t[n];
      }
    }
  }
  return a;
}
