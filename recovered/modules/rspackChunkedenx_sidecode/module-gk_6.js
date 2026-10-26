import n from "./module-A_7.js";
import o from "./module-J_7.js";
import a from "./module-YR_6.js";
import i from "./module-O9_6.js";
import s from "./module-M_2_6.js";
import c from "./module-X_7.js";
import u from "./module-ng_7.js";
import f from "./module-eXf_6.js";
import _l from "./module-Ee_6.js";
const _l_itoc = _l.itoc;
const h = a("btoa");
const p = i("".charAt);
const v = i("".charCodeAt);
const d =
  !!h &&
  !c(function () {
    h();
  });
const g =
  !!h &&
  c(function () {
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
        return s(h, o, u(t));
      }
      let r;
      let e;
      for (
        var n = u(t), i = "", c = 0, m = _l_itoc;
        p(n, c) || ((m = "="), c % 1);
      ) {
        if ((e = v(n, (c += 0.75))) > 255) {
          throw new (a("DOMException"))(
            "The string contains characters outside of the Latin1 range",
            "InvalidCharacterError",
          );
        }
        i += p(m, 63 & ((r = (r << 8) | e) >> (8 - (c % 1) * 8)));
      }
      return i;
    },
  },
);
