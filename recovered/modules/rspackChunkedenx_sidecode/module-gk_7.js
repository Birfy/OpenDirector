import n from "./module-A_8.js";
import o from "./module-J_8.js";
import i from "./module-YR_7.js";
import a from "./module-O9_7.js";
import s from "./module-M_2_7.js";
import u from "./module-X_8.js";
import c from "./module-ng_8.js";
import f from "./module-eXf_7.js";
import _l from "./module-Ee_7.js";
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
        var n = c(r), a = "", u = 0, m = _l_itoc;
        v(n, u) || ((m = "="), u % 1);
      ) {
        if ((e = p(n, (u += 0.75))) > 255) {
          throw new (i("DOMException"))(
            "The string contains characters outside of the Latin1 range",
            "InvalidCharacterError",
          );
        }
        a += v(m, 63 & ((t = (t << 8) | e) >> (8 - (u % 1) * 8)));
      }
      return a;
    },
  },
);
