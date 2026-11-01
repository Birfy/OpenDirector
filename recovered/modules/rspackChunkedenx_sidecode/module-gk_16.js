import n from "./module-A_17.js";
import o from "./module-J_17.js";
import i from "./module-YR_16.js";
import a from "./module-O9_16.js";
import s from "./module-M_2_16.js";
import u from "./module-X_17.js";
import c from "./module-ng_17.js";
import f from "./module-eXf_16.js";
import _l from "./module-Ee_16.js";
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
    btoa: function (t) {
      f(arguments.length, 1);
      if (d || g || y) {
        return s(h, o, c(t));
      }
      let r;
      let e;
      for (
        var n = c(t), a = "", u = 0, m = _l_itoc;
        v(n, u) || ((m = "="), u % 1);
      ) {
        if ((e = p(n, (u += 0.75))) > 255) {
          throw new (i("DOMException"))(
            "The string contains characters outside of the Latin1 range",
            "InvalidCharacterError",
          );
        }
        a += v(m, 63 & ((r = (r << 8) | e) >> (8 - (u % 1) * 8)));
      }
      return a;
    },
  },
);
