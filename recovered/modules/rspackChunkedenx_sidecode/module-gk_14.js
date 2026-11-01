import n from "./module-A_15.js";
import o from "./module-J_15.js";
import i from "./module-YR_14.js";
import a from "./module-O9_14.js";
import s from "./module-M_2_14.js";
import c from "./module-X_15.js";
import u from "./module-ng_15.js";
import f from "./module-eXf_14.js";
import _l from "./module-Ee_14.js";
const _l_itoc = _l.itoc;
const h = i("btoa");
const v = a("".charAt);
const p = a("".charCodeAt);
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
        var n = u(t), a = "", c = 0, b = _l_itoc;
        v(n, c) || ((b = "="), c % 1);
      ) {
        if ((e = p(n, (c += 0.75))) > 255) {
          throw new (i("DOMException"))(
            "The string contains characters outside of the Latin1 range",
            "InvalidCharacterError",
          );
        }
        a += v(b, 63 & ((r = (r << 8) | e) >> (8 - (c % 1) * 8)));
      }
      return a;
    },
  },
);
