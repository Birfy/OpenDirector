import n from "./module-g.js";
import o from "./module-p3.js";
import i from "./module-o.js";
import a from "./module-H_2.js";
import s from "./module-BC_2.js";
import u from "./module-VV_4.js";
const f = i("".charAt);
const l = i("".charCodeAt);
const p = i([].join);
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
      const e = s(a(this));
      if (forced) {
        return o(toWellFormed, e);
      }
      for (var t = e.length, r = Array(t), n = 0; n < t; n++) {
        const i = l(e, n);
        if ((63488 & i) != 55296) {
          r[n] = f(e, n);
        } else if (i >= 56320 || n + 1 >= t || (64512 & l(e, n + 1)) != 56320) {
          r[n] = "\uFFFD";
        } else {
          r[n] = f(e, n);
          r[++n] = f(e, n);
        }
      }
      return p(r, "");
    },
  },
);
