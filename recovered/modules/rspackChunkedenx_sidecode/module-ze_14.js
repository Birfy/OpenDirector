import n from "./module-wL_13.js";
const i = function (r, t) {
  const r_length = r.length;
  const u = Math.floor(r_length / 2);
  if (r_length < 8) {
    return a(r, t);
  }
  return s(r, i(n(r, 0, u), t), i(n(r, u), t), t);
};
var a = (r, t) => {
  let e;
  let n;
  for (let o = r.length, i = 1; i < o;) {
    n = i;
    for (e = r[i]; n && t(r[n - 1], e) > 0;) {
      r[n] = r[--n];
    }
    if (n !== i++) {
      r[n] = e;
    }
  }
  return r;
};
var s = (r, t, e, n) => {
  for (let o = t.length, i = e.length, a = 0, s = 0; a < o || s < i;) {
    r[a + s] =
      a < o && s < i
        ? n(t[a], e[s]) <= 0
          ? t[a++]
          : e[s++]
        : a < o
          ? t[a++]
          : e[s++];
  }
  return r;
};
export default i;
