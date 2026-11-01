import n from "./module-wL_21.js";
const o = function (t, r) {
  const t_length = t.length;
  const u = Math.floor(t_length / 2);
  if (t_length < 8) {
    return s(t, r);
  }
  return a(t, o(n(t, 0, u), r), o(n(t, u), r), r);
};
var s = (t, r) => {
  let e;
  let n;
  for (let i = t.length, o = 1; o < i;) {
    n = o;
    for (e = t[o]; n && r(t[n - 1], e) > 0;) {
      t[n] = t[--n];
    }
    if (n !== o++) {
      t[n] = e;
    }
  }
  return t;
};
var a = (t, r, e, n) => {
  for (let i = r.length, o = e.length, s = 0, a = 0; s < i || a < o;) {
    t[s + a] =
      s < i && a < o
        ? n(r[s], e[a]) <= 0
          ? r[s++]
          : e[a++]
        : s < i
          ? r[s++]
          : e[a++];
  }
  return t;
};
export default o;
