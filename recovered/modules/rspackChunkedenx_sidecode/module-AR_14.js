import n from "./module-A_15.js";
import o from "./module-J_15.js";
import i from "./module-YR_14.js";
import a from "./module-O9_14.js";
import s from "./module-M_2_14.js";
import c from "./module-X_15.js";
import u from "./module-ng_15.js";
import f from "./module-D_2_14.js";
import l from "./module-eXf_14.js";
import _h from "./module-Ee_14.js";
const _h_ctoi = _h.ctoi;
const v = /[^\d+/a-z]/i;
const p = /[\t\n\f\r ]+/g;
const d = /[=]{1,2}$/;
const g = i("atob");
const b = a("".charAt);
const m = a("".replace);
const A = a(v.exec);
const x = c(function () {
  return g(" ") !== "";
});
const w = !c(function () {
  g("a");
});
const S =
  !x &&
  !w &&
  !c(function () {
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
    atob: function (t) {
      l(arguments.length, 1);
      if (S || E) {
        return s(g, o, t);
      }
      let r;
      let e;
      let n = m(u(t), p, "");
      let a = "";
      let c = 0;
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
      while ((r = b(n, c++))) {
        if (f(_h_ctoi, r)) {
          e = x % 4 ? 64 * e + _h_ctoi[r] : _h_ctoi[r];
          if (x++ % 4) {
            a += String.fromCharCode(255 & (e >> ((-2 * x) & 6)));
          }
        }
      }
      return a;
    },
  },
);
