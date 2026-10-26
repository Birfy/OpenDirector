import n from "./module-A_23.js";
import i from "./module-J_23.js";
import o from "./module-YR_22.js";
import s from "./module-O9_22.js";
import a from "./module-M_2_22.js";
import u from "./module-X_23.js";
import c from "./module-ng_23.js";
import f from "./module-eXf_22.js";
import _h from "./module-Ee_22.js";
const _h_itoc = _h.itoc;
const l = o("btoa");
const v = s("".charAt);
const p = s("".charCodeAt);
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
        return a(l, i, c(t));
      }
      let r;
      let e;
      for (
        var n = c(t), s = "", u = 0, b = _h_itoc;
        v(n, u) || ((b = "="), u % 1);
      ) {
        if ((e = p(n, (u += 0.75))) > 255) {
          throw new (o("DOMException"))(
            "The string contains characters outside of the Latin1 range",
            "InvalidCharacterError",
          );
        }
        s += v(b, 63 & ((r = (r << 8) | e) >> (8 - (u % 1) * 8)));
      }
      return s;
    },
  },
);
