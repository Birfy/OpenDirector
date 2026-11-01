import n from "./module-A_20.js";
import o from "./module-GN_19.js";
import i from "./module-d_20.js";
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
