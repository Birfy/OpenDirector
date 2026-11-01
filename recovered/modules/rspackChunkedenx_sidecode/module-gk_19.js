import n from "./module-A_20.js";
import o from "./module-J_20.js";
import i from "./module-YR_19.js";
import a from "./module-O9_19.js";
import s from "./module-M_2_19.js";
import u from "./module-X_20.js";
import c from "./module-ng_20.js";
import f from "./module-eXf_19.js";
import _l from "./module-Ee_19.js";
const _l_itoc = _l.itoc;
const h = i("btoa");
const v = a("".charAt);
const p = a("".charCodeAt);
const d =
  !!h &&
  !u(function () {
    h();
  });
const g =
  !!h &&
  u(function () {
    return h(null) !== "bnVsbA==";
  });
const y = !!h && h.length !== 1;
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
        return s(h, o, c(r));
      }
      let t;
      let e;
      for (
        var n = c(r), a = "", u = 0, b = _l_itoc;
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
