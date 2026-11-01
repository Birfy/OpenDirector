import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-O9_9.js";
import a from "./module-vj_10.js";
import s from "./module-ng_10.js";
import u from "./module-X_10.js";
const f = i("".charAt);
const l = i("".charCodeAt);
const h = i([].join);
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
      const t = s(a(this));
      if (forced) {
        return o(toWellFormed, t);
      }
      for (var e = t.length, r = Array(e), n = 0; n < e; n++) {
        const i = l(t, n);
        if ((63488 & i) != 55296) {
          r[n] = f(t, n);
        } else if (i >= 56320 || n + 1 >= e || (64512 & l(t, n + 1)) != 56320) {
          r[n] = "\uFFFD";
        } else {
          r[n] = f(t, n);
          r[++n] = f(t, n);
        }
      }
      return h(r, "");
    },
  },
);
