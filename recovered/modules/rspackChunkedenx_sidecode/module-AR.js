import n from "./module-A.js";
import o from "./module-J.js";
import i from "./module-YR.js";
import a from "./module-O9.js";
import s from "./module-M_2.js";
import u from "./module-X.js";
import c from "./module-ng.js";
import f from "./module-D_2.js";
import h from "./module-eXf.js";
import _l from "./module-Ee.js";
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
    atob: function (t) {
      h(arguments.length, 1);
      if (S || E) {
        return s(g, o, t);
      }
      let r;
      let e;
      let n = m(c(t), p, "");
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
      while ((r = b(n, u++))) {
        if (f(_l_ctoi, r)) {
          e = x % 4 ? 64 * e + _l_ctoi[r] : _l_ctoi[r];
          if (x++ % 4) {
            a += String.fromCharCode(255 & (e >> ((-2 * x) & 6)));
          }
        }
      }
      return a;
    },
  },
);
