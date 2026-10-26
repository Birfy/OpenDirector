import n from "./module-A_12.js";
import o from "./module-J_12.js";
import i from "./module-YR_11.js";
import a from "./module-O9_11.js";
import s from "./module-M_2_11.js";
import u from "./module-X_12.js";
import c from "./module-ng_12.js";
import f from "./module-D_2_11.js";
import h from "./module-eXf_11.js";
import _l from "./module-Ee_11.js";
const _l_ctoi = _l.ctoi;
const v = /[^\d+/a-z]/i;
const p = /[\t\n\f\r ]+/g;
const d = /[=]{1,2}$/;
const g = i("atob");
const b = a("".charAt);
const m = a("".replace);
const A = a(v.exec);
const x = u(function () {
  return g(" ") !== "";
});
const w = !u(function () {
  g("a");
});
const S =
  !x &&
  !w &&
  !u(function () {
    g();
  });
const E = !x && !w && g.length !== 1;
n(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: x || w || S || E,
  },
  {
    atob: function (r) {
      h(arguments.length, 1);
      if (S || E) {
        return s(g, o, r);
      }
      let t;
      let e;
      let n = m(c(r), p, "");
      let a = "";
      let u = 0;
      let x = 0;
      if (n.length % 4 == 0) {
        n = m(n, d, "");
      }
      if (n.length % 4 == 1 || A(v, n)) {
        throw new (i("DOMException"))(
          "The string is not correctly encoded",
          "InvalidCharacterError",
        );
      }
      while ((t = b(n, u++))) {
        if (f(_l_ctoi, t)) {
          e = x % 4 ? 64 * e + _l_ctoi[t] : _l_ctoi[t];
          if (x++ % 4) {
            a += String.fromCharCode(255 & (e >> ((-2 * x) & 6)));
          }
        }
      }
      return a;
    },
  },
);
