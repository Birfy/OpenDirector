export function A(e, t) {
  let n = {};
  t.forEach((t) => {
    if (t in e) {
      n[t] = e[t];
    }
  });
  return n;
}
export function t(e) {
  let t = {};
  if (e) {
    Object.keys(e).forEach((n) => {
      let r = String(n);
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
