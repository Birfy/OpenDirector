import n from "./module-A.js";
import o from "./module-J.js";
import i from "./module-YR.js";
import a from "./module-O9.js";
import s from "./module-M_2.js";
import u from "./module-X.js";
import c from "./module-ng.js";
import f from "./module-eXf.js";
import _h from "./module-Ee.js";
const _h_itoc = _h.itoc;
const l = i("btoa");
const v = a("".charAt);
const p = a("".charCodeAt);
const d =
  !!l &&
  !u(function () {
    l();
  });
const g =
  !!l &&
  u(function () {
    return l(null) !== "bnVsbA==";
  });
const y = !!l && l.length !== 1;
n(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: d || g || y,
  },
  {
    btoa: function (t) {
      f(arguments.length, 1);
      if (d || g || y) {
        return s(l, o, c(t));
      }
      let r;
      let e;
      for (
        var n = c(t), a = "", u = 0, b = _h_itoc;
        v(n, u) || ((b = "="), u % 1);
      ) {
        if ((e = p(n, (u += 0.75))) > 255) {
          throw new (i("DOMException"))(
            "The string contains characters outside of the Latin1 range",
            "InvalidCharacterError",
          );
        }
        a += v(b, 63 & ((r = (r << 8) | e) >> (8 - (u % 1) * 8)));
      }
      return a;
    },
  },
);
