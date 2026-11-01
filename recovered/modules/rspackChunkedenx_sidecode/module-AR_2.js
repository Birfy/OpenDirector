import n from "./module-A_3.js";
import i from "./module-J_3.js";
import o from "./module-YR_2.js";
import s from "./module-O9_2.js";
import a from "./module-M_2_2.js";
import u from "./module-X_3.js";
import c from "./module-ng_3.js";
import f from "./module-D_2_2.js";
import h from "./module-eXf_2.js";
import _l from "./module-Ee_2.js";
const _l_ctoi = _l.ctoi;
const v = /[^\d+/a-z]/i;
const p = /[\t\n\f\r ]+/g;
const d = /[=]{1,2}$/;
const g = o("atob");
const b = s("".charAt);
const m = s("".replace);
const A = s(v.exec);
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
    atob: function (t) {
      h(arguments.length, 1);
      if (S || E) {
        return a(g, i, t);
      }
      let r;
      let e;
      let n = m(c(t), p, "");
      let s = "";
      let u = 0;
      let x = 0;
      if (n.length % 4 == 0) {
        n = m(n, d, "");
      }
      if (n.length % 4 == 1 || A(v, n)) {
        throw new (o("DOMException"))(
          "The string is not correctly encoded",
          "InvalidCharacterError",
        );
      }
      while ((r = b(n, u++))) {
        if (f(_l_ctoi, r)) {
          e = x % 4 ? 64 * e + _l_ctoi[r] : _l_ctoi[r];
          if (x++ % 4) {
            s += String.fromCharCode(255 & (e >> ((-2 * x) & 6)));
          }
        }
      }
      return s;
    },
  },
);
