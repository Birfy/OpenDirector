import n from "./module-A_16.js";
import o from "./module-GN_15.js";
import i from "./module-d_16.js";
const o_toKey = o.toKey;
const o_set = o.set;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    metadata: function (r, t) {
      return function (e, n) {
        o_set(r, t, i(e), o_toKey(n));
      };
    },
  },
);
