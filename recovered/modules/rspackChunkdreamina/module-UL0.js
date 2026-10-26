export function b(e, t, r) {
  if (r) {
    for (const a of r) {
      if (e[a] !== t[a]) {
        return false;
      }
    }
    return true;
  }
  const i = Object.keys(e);
  const n = Object.keys(t);
  if (i.length !== n.length) {
    return false;
  }
  for (const o of i) {
    if (e[o] !== t[o]) {
      return false;
    }
  }
  return true;
}
