import n from "./module-A_7.js";
import o from "./module-J_7.js";
import a from "./module-YR_6.js";
import i from "./module-O9_6.js";
import s from "./module-M_2_6.js";
import c from "./module-X_7.js";
import u from "./module-ng_7.js";
import f from "./module-D_2_6.js";
import l from "./module-eXf_6.js";
import _h from "./module-Ee_6.js";
const _h_ctoi = _h.ctoi;
const p = /[^\d+/a-z]/i;
const v = /[\t\n\f\r ]+/g;
const d = /[=]{1,2}$/;
const g = a("atob");
const m = i("".charAt);
const b = i("".replace);
const A = i(p.exec);
const w = c(function () {
  return g(" ") !== "";
});
const x = !c(function () {
  g("a");
});
const E =
  !w &&
  !x &&
  !c(function () {
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
    atob: function (t) {
      l(arguments.length, 1);
      if (E || S) {
        return s(g, o, t);
      }
      let r;
      let e;
      let n = b(u(t), v, "");
      let i = "";
      let c = 0;
      let w = 0;
      if (n.length % 4 == 0) {
        n = b(n, d, "");
      }
      if (n.length % 4 == 1 || A(p, n)) {
        throw new (a("DOMException"))(
          "The string is not correctly encoded",
          "InvalidCharacterError",
        );
      }
      while ((r = m(n, c++))) {
        if (f(_h_ctoi, r)) {
          e = w % 4 ? 64 * e + _h_ctoi[r] : _h_ctoi[r];
          if (w++ % 4) {
            i += String.fromCharCode(255 & (e >> ((-2 * w) & 6)));
          }
        }
      }
      return i;
    },
  },
);
