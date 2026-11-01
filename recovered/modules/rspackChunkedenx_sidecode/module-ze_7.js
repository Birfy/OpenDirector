import n from "./module-wL_6.js";
const a = function (t, r) {
  const t_length = t.length;
  const c = Math.floor(t_length / 2);
  if (t_length < 8) {
    return i(t, r);
  }
  return s(t, a(n(t, 0, c), r), a(n(t, c), r), r);
};
var i = (t, r) => {
  let e;
  let n;
  for (let o = t.length, a = 1; a < o;) {
    n = a;
    for (e = t[a]; n && r(t[n - 1], e) > 0;) {
      t[n] = t[--n];
    }
    if (n !== a++) {
      t[n] = e;
    }
  }
  return t;
};
var s = (t, r, e, n) => {
  for (let o = r.length, a = e.length, i = 0, s = 0; i < o || s < a;) {
    t[i + s] =
      i < o && s < a
        ? n(r[i], e[s]) <= 0
          ? r[i++]
          : e[s++]
        : i < o
          ? r[i++]
          : e[s++];
  }
  return t;
};
export default a;
