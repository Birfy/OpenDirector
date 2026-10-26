import n from "./module-A_21.js";
import o from "./module-J_21.js";
import i from "./module-YR_20.js";
import a from "./module-O9_20.js";
import s from "./module-M_2_20.js";
import c from "./module-X_21.js";
import u from "./module-ng_21.js";
import f from "./module-D_2_20.js";
import l from "./module-eXf_20.js";
import _h from "./module-Ee_20.js";
const _h_ctoi = _h.ctoi;
const v = /[^\d+/a-z]/i;
const p = /[\t\n\f\r ]+/g;
const d = /[=]{1,2}$/;
const g = i("atob");
const m = a("".charAt);
const b = a("".replace);
const w = a(v.exec);
const A = c(function () {
  return g(" ") !== "";
});
const x = !c(function () {
  g("a");
});
const S =
  !A &&
  !x &&
  !c(function () {
    g();
  });
const E = !A && !x && g.length !== 1;
n(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: A || x || S || E,
  },
  {
    atob: function (t) {
      l(arguments.length, 1);
      if (S || E) {
        return s(g, o, t);
      }
      let r;
      let e;
      let n = b(u(t), p, "");
      let a = "";
      let c = 0;
      let A = 0;
      if (n.length % 4 == 0) {
        n = b(n, d, "");
      }
      if (n.length % 4 == 1 || w(v, n)) {
        throw new (i("DOMException"))(
          "The string is not correctly encoded",
          "InvalidCharacterError",
        );
      }
      while ((r = m(n, c++))) {
        if (f(_h_ctoi, r)) {
          e = A % 4 ? 64 * e + _h_ctoi[r] : _h_ctoi[r];
          if (A++ % 4) {
            a += String.fromCharCode(255 & (e >> ((-2 * A) & 6)));
          }
        }
      }
      return a;
    },
  },
);
