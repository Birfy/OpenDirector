import n from "./module-wL_9.js";
const i = function (t, e) {
  const t_length = t.length;
  const u = Math.floor(t_length / 2);
  if (t_length < 8) {
    return a(t, e);
  }
  return s(t, i(n(t, 0, u), e), i(n(t, u), e), e);
};
var a = (t, e) => {
  let r;
  let n;
  for (let o = t.length, i = 1; i < o;) {
    n = i;
    for (r = t[i]; n && e(t[n - 1], r) > 0;) {
      t[n] = t[--n];
    }
    if (n !== i++) {
      t[n] = r;
    }
  }
  return t;
};
var s = (t, e, r, n) => {
  for (let o = e.length, i = r.length, a = 0, s = 0; a < o || s < i;) {
    t[a + s] =
      a < o && s < i
        ? n(e[a], r[s]) <= 0
          ? e[a++]
          : r[s++]
        : a < o
          ? e[a++]
          : r[s++];
  }
  return t;
};
export default i;
