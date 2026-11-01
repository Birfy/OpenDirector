import n from "./module-wL.js";
const i = function (t, r) {
  const t_length = t.length;
  const u = Math.floor(t_length / 2);
  if (t_length < 8) {
    return a(t, r);
  }
  return s(t, i(n(t, 0, u), r), i(n(t, u), r), r);
};
var a = (t, r) => {
  let e;
  let n;
  for (let o = t.length, i = 1; i < o;) {
    n = i;
    for (e = t[i]; n && r(t[n - 1], e) > 0;) {
      t[n] = t[--n];
    }
    if (n !== i++) {
      t[n] = e;
    }
  }
  return t;
};
var s = (t, r, e, n) => {
  for (let o = r.length, i = e.length, a = 0, s = 0; a < o || s < i;) {
    t[a + s] =
      a < o && s < i
        ? n(r[a], e[s]) <= 0
          ? r[a++]
          : e[s++]
        : a < o
          ? r[a++]
          : e[s++];
  }
  return t;
};
export default i;
