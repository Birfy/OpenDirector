import n from "g";
import i from "u";
import a from "Y";
import o from "o";
import s from "p3";
import A from "VV";
import c from "BC";
import u from "lU";
import { itoc } from "EB";
const h = a("btoa");
const f = o("".charAt);
const g = o("".charCodeAt);
const d =
  !!h &&
  !A(function () {
    h();
  });
const p =
  !!h &&
  A(function () {
    return h(null) !== "bnVsbA==";
  });
const m = !!h && h.length !== 1;
n(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: d || p || m,
  },
  {
    btoa: function (t) {
      u(arguments.length, 1);
      if (d || p || m) {
        return s(h, i, c(t));
      }
      let e;
      let r;
      for (
        var n = c(t), o = "", A = 0, y = itoc;
        f(n, A) || ((y = "="), A % 1);
      ) {
        if ((r = g(n, (A += 0.75))) > 255) {
          throw new (a("DOMException"))(
            "The string contains characters outside of the Latin1 range",
            "InvalidCharacterError",
          );
        }
        o += f(y, 63 & ((e = (e << 8) | r) >> (8 - (A % 1) * 8)));
      }
      return o;
    },
  },
);
