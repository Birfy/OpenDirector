export function A(e, t) {
  if (e == null) {
    return {};
  }
  const r = {};
  for (const n in e) {
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) {
        continue;
      }
      r[n] = e[n];
    }
  }
  return r;
}
