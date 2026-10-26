import n from "./module-A_8.js";
import o from "./module-J_8.js";
import i from "./module-YR_7.js";
import a from "./module-O9_7.js";
import s from "./module-M_2_7.js";
import u from "./module-X_8.js";
import c from "./module-ng_8.js";
import f from "./module-D_2_7.js";
import l from "./module-eXf_7.js";
import _h from "./module-Ee_7.js";
const _h_ctoi = _h.ctoi;
const v = /[^\d+/a-z]/i;
const p = /[\t\n\f\r ]+/g;
const d = /[=]{1,2}$/;
const g = i("atob");
const m = a("".charAt);
const b = a("".replace);
const A = a(v.exec);
const w = u(function () {
  return g(" ") !== "";
});
const x = !u(function () {
  g("a");
});
const E =
  !w &&
  !x &&
  !u(function () {
    g();
  });
const S = !w && !x && g.length !== 1;
n(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: w || x || E || S,
  },
  {
    atob: function (r) {
      l(arguments.length, 1);
      if (E || S) {
        return s(g, o, r);
      }
      let t;
      let e;
      let n = b(c(r), p, "");
      let a = "";
      let u = 0;
      let w = 0;
      if (n.length % 4 == 0) {
        n = b(n, d, "");
      }
      if (n.length % 4 == 1 || A(v, n)) {
        throw new (i("DOMException"))(
          "The string is not correctly encoded",
          "InvalidCharacterError",
        );
      }
      while ((t = m(n, u++))) {
        if (f(_h_ctoi, t)) {
          e = w % 4 ? 64 * e + _h_ctoi[t] : _h_ctoi[t];
          if (w++ % 4) {
            a += String.fromCharCode(255 & (e >> ((-2 * w) & 6)));
          }
        }
      }
      return a;
    },
  },
);
