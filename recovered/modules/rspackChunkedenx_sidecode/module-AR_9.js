import n from "./module-A_10.js";
import o from "./module-J_10.js";
import i from "./module-YR_9.js";
import a from "./module-O9_9.js";
import s from "./module-M_2_9.js";
import u from "./module-X_10.js";
import c from "./module-ng_10.js";
import f from "./module-D_2_9.js";
import l from "./module-eXf_9.js";
import _h from "./module-Ee_9.js";
const _h_ctoi = _h.ctoi;
const v = /[^\d+/a-z]/i;
const d = /[\t\n\f\r ]+/g;
const p = /[=]{1,2}$/;
const g = i("atob");
const m = a("".charAt);
const b = a("".replace);
const w = a(v.exec);
const A = u(function () {
  return g(" ") !== "";
});
const x = !u(function () {
  g("a");
});
const E =
  !A &&
  !x &&
  !u(function () {
    g();
  });
const S = !A && !x && g.length !== 1;
n(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: A || x || E || S,
  },
  {
    atob: function (t) {
      l(arguments.length, 1);
      if (E || S) {
        return s(g, o, t);
      }
      let e;
      let r;
      let n = b(c(t), d, "");
      let a = "";
      let u = 0;
      let A = 0;
      if (n.length % 4 == 0) {
        n = b(n, p, "");
      }
      if (n.length % 4 == 1 || w(v, n)) {
        throw new (i("DOMException"))(
          "The string is not correctly encoded",
          "InvalidCharacterError",
        );
      }
      while ((e = m(n, u++))) {
        if (f(_h_ctoi, e)) {
          r = A % 4 ? 64 * r + _h_ctoi[e] : _h_ctoi[e];
          if (A++ % 4) {
            a += String.fromCharCode(255 & (r >> ((-2 * A) & 6)));
          }
        }
      }
      return a;
    },
  },
);
