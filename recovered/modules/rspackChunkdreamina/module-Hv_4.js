export function A(e, t) {
  const n = {};
  t.forEach((t) => {
    if (t in e) {
      n[t] = e[t];
    }
  });
  return n;
}
export function t(e) {
  const t = {};
  if (e) {
    Object.keys(e).forEach((n) => {
      const r = String(n);
      if (r.indexOf("data-") === 0) {
        t[r] = e[r];
      }
      if (r.indexOf("aria-") === 0) {
        t[r] = e[r];
      }
    });
  }
  return t;
}
