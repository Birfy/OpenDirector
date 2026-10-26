import n from "./module-A_18.js";
import o from "./module-M_2_17.js";
import i from "./module-O9_17.js";
import a from "./module-vj_18.js";
import s from "./module-ng_18.js";
import u from "./module-X_18.js";
const f = i("".charAt);
const h = i("".charCodeAt);
const l = i([].join);
const toWellFormed = "".toWellFormed;
const forced =
  toWellFormed &&
  u(function () {
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
      const r = s(a(this));
      if (forced) {
        return o(toWellFormed, r);
      }
      for (var t = r.length, e = Array(t), n = 0; n < t; n++) {
        const i = h(r, n);
        if ((63488 & i) != 55296) {
          e[n] = f(r, n);
        } else if (i >= 56320 || n + 1 >= t || (64512 & h(r, n + 1)) != 56320) {
          e[n] = "\uFFFD";
        } else {
          e[n] = f(r, n);
          e[++n] = f(r, n);
        }
      }
      return l(e, "");
    },
  },
);
