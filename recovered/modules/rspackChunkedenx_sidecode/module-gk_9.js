import n from "./module-A_10.js";
import o from "./module-J_10.js";
import i from "./module-YR_9.js";
import a from "./module-O9_9.js";
import s from "./module-M_2_9.js";
import u from "./module-X_10.js";
import c from "./module-ng_10.js";
import f from "./module-eXf_9.js";
import _l from "./module-Ee_9.js";
const _l_itoc = _l.itoc;
const h = i("btoa");
const v = a("".charAt);
const d = a("".charCodeAt);
const p =
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
    forced: p || g || y,
  },
  {
    btoa: function (t) {
      f(arguments.length, 1);
      if (p || g || y) {
        return s(h, o, c(t));
      }
      let e;
      let r;
      for (
        var n = c(t), a = "", u = 0, m = _l_itoc;
        v(n, u) || ((m = "="), u % 1);
      ) {
        if ((r = d(n, (u += 0.75))) > 255) {
          throw new (i("DOMException"))(
            "The string contains characters outside of the Latin1 range",
            "InvalidCharacterError",
          );
        }
        a += v(m, 63 & ((e = (e << 8) | r) >> (8 - (u % 1) * 8)));
      }
      return a;
    },
  },
);
