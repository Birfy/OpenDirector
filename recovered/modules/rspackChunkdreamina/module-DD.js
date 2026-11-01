import n from "./module-us_3.js";
const i = function (e, t) {
  const e_length = e.length;
  const u = Math.floor(e_length / 2);
  if (e_length < 8) {
    return a(e, t);
  }
  return s(e, i(n(e, 0, u), t), i(n(e, u), t), t);
};
var a = (e, t) => {
  let r;
  let n;
  for (let o = e.length, i = 1; i < o;) {
    n = i;
    for (r = e[i]; n && t(e[n - 1], r) > 0;) {
      e[n] = e[--n];
    }
    if (n !== i++) {
      e[n] = r;
    }
  }
  return e;
};
var s = (e, t, r, n) => {
  for (let o = t.length, i = r.length, a = 0, s = 0; a < o || s < i;) {
    e[a + s] =
      a < o && s < i
        ? n(t[a], r[s]) <= 0
          ? t[a++]
          : r[s++]
        : a < o
          ? t[a++]
          : r[s++];
  }
  return e;
};
export default i;
