import n from "./module-A_3.js";
import i from "./module-M_2_2.js";
import o from "./module-O9_2.js";
import s from "./module-vj_3.js";
import a from "./module-ng_3.js";
import u from "./module-X_3.js";
const f = o("".charAt);
const h = o("".charCodeAt);
const l = o([].join);
const toWellFormed = "".toWellFormed;
const forced =
  toWellFormed &&
  u(function () {
    return i(toWellFormed, 1) !== "1";
  });
n(
  {
    target: "String",
    proto: true,
    forced,
  },
  {
    toWellFormed: function () {
      const t = a(s(this));
      if (forced) {
        return i(toWellFormed, t);
      }
      for (var r = t.length, e = Array(r), n = 0; n < r; n++) {
        const o = h(t, n);
        if ((63488 & o) != 55296) {
          e[n] = f(t, n);
        } else if (o >= 56320 || n + 1 >= r || (64512 & h(t, n + 1)) != 56320) {
          e[n] = "\uFFFD";
        } else {
          e[n] = f(t, n);
          e[++n] = f(t, n);
        }
      }
      return l(e, "");
    },
  },
);
