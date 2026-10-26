import n from "./module-A_21.js";
import o from "./module-GN_20.js";
import i from "./module-d_21.js";
const o_toKey = o.toKey;
const o_set = o.set;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    metadata: function (t, r) {
      return function (e, n) {
        o_set(t, r, i(e), o_toKey(n));
      };
    },
  },
);
