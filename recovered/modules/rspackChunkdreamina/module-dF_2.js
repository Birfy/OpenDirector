import n from "g";
import i from "u";
import a from "Y";
import o from "o";
import s from "p3";
import A from "VV";
import c from "BC";
import u from "h";
import l from "lU";
import { ctoi } from "EB";
const f = /[^\d+/a-z]/i;
const g = /[\t\n\f\r ]+/g;
const d = /[=]{1,2}$/;
const p = a("atob");
const y = o("".charAt);
const b = o("".replace);
const v = o(f.exec);
const I = A(function () {
  return p(" ") !== "";
});
const w = !A(function () {
  p("a");
});
const C =
  !I &&
  !w &&
  !A(function () {
    p();
  });
const B = !I && !w && p.length !== 1;
n(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: I || w || C || B,
  },
  {
    atob: function (t) {
      l(arguments.length, 1);
      if (C || B) {
        return s(p, i, t);
      }
      let e;
      let r;
      let n = b(c(t), g, "");
      let o = "";
      let A = 0;
      let I = 0;
      if (n.length % 4 == 0) {
        n = b(n, d, "");
      }
      if (n.length % 4 == 1 || v(f, n)) {
        throw new (a("DOMException"))(
          "The string is not correctly encoded",
          "InvalidCharacterError",
        );
      }
      while ((e = y(n, A++))) {
        if (u(ctoi, e)) {
          r = I % 4 ? 64 * r + ctoi[e] : ctoi[e];
          if (I++ % 4) {
            o += String.fromCharCode(255 & (r >> ((-2 * I) & 6)));
          }
        }
      }
      return o;
    },
  },
);
