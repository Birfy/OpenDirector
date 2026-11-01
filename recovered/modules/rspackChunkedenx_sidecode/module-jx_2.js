import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-O9.js";
import a from "./module-vj.js";
import s from "./module-ng.js";
import u from "./module-X.js";
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
      const t = s(a(this));
      if (forced) {
        return o(toWellFormed, t);
      }
      for (var r = t.length, e = Array(r), n = 0; n < r; n++) {
        const i = h(t, n);
        if ((63488 & i) != 55296) {
          e[n] = f(t, n);
        } else if (i >= 56320 || n + 1 >= r || (64512 & h(t, n + 1)) != 56320) {
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
