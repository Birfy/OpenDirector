import n from "./module-A_17.js";
import o from "./module-GN_16.js";
import i from "./module-d_17.js";
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
