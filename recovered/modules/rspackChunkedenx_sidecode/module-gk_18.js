import n from "./module-A_19.js";
import o from "./module-J_19.js";
import i from "./module-YR_18.js";
import a from "./module-O9_18.js";
import s from "./module-M_2_18.js";
import u from "./module-X_19.js";
import c from "./module-ng_19.js";
import f from "./module-eXf_18.js";
import _h from "./module-Ee_18.js";
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
    btoa: function (r) {
      f(arguments.length, 1);
      if (d || g || y) {
        return s(l, o, c(r));
      }
      let t;
      let e;
      for (
        var n = c(r), a = "", u = 0, b = _h_itoc;
        v(n, u) || ((b = "="), u % 1);
      ) {
        if ((e = p(n, (u += 0.75))) > 255) {
          throw new (i("DOMException"))(
            "The string contains characters outside of the Latin1 range",
            "InvalidCharacterError",
          );
        }
        a += v(b, 63 & ((t = (t << 8) | e) >> (8 - (u % 1) * 8)));
      }
      return a;
    },
  },
);
