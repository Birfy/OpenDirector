import n from "./module-A_20.js";
import o from "./module-J_20.js";
import i from "./module-YR_19.js";
import a from "./module-O9_19.js";
import s from "./module-M_2_19.js";
import u from "./module-X_20.js";
import c from "./module-ng_20.js";
import f from "./module-D_2_19.js";
import l from "./module-eXf_19.js";
import _h from "./module-Ee_19.js";
const _h_ctoi = _h.ctoi;
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
      l(arguments.length, 1);
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
        if (f(_h_ctoi, t)) {
          e = x % 4 ? 64 * e + _h_ctoi[t] : _h_ctoi[t];
          if (x++ % 4) {
            a += String.fromCharCode(255 & (e >> ((-2 * x) & 6)));
          }
        }
      }
      return a;
    },
  },
);
