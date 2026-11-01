import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-O9_6.js";
import i from "./module-vj_7.js";
import s from "./module-ng_7.js";
import c from "./module-X_7.js";
const f = a("".charAt);
const l = a("".charCodeAt);
const h = a([].join);
const toWellFormed = "".toWellFormed;
const forced =
  toWellFormed &&
  c(function () {
    return o(toWellFormed, 1) !== "1";
  });
n(
  {
    target: "String",
    proto: true,
    forced,
  },
  {
    toWellFormed: function () {
      const t = s(i(this));
      if (forced) {
        return o(toWellFormed, t);
      }
      for (var r = t.length, e = Array(r), n = 0; n < r; n++) {
        const a = l(t, n);
        if ((63488 & a) != 55296) {
          e[n] = f(t, n);
        } else if (a >= 56320 || n + 1 >= r || (64512 & l(t, n + 1)) != 56320) {
          e[n] = "\uFFFD";
        } else {
          e[n] = f(t, n);
          e[++n] = f(t, n);
        }
      }
      return h(e, "");
    },
  },
);
