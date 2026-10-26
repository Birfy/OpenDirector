import n from "./module-A_15.js";
import o from "./module-M_2_14.js";
import i from "./module-O9_14.js";
import a from "./module-vj_15.js";
import s from "./module-ng_15.js";
import c from "./module-X_15.js";
const f = i("".charAt);
const l = i("".charCodeAt);
const h = i([].join);
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
      const t = s(a(this));
      if (forced) {
        return o(toWellFormed, t);
      }
      for (var r = t.length, e = Array(r), n = 0; n < r; n++) {
        const i = l(t, n);
        if ((63488 & i) != 55296) {
          e[n] = f(t, n);
        } else if (i >= 56320 || n + 1 >= r || (64512 & l(t, n + 1)) != 56320) {
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
