export function _(e, t, ...r) {
  if (typeof e === "function") {
    let o;
    if ((o = e(...r)) != null) {
      return o;
    }
    return t;
  }
  if (e != null) {
    return e;
  }
  return t;
}
