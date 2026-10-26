import n from "./module-A_24.js";
import o from "./module-GN_23.js";
import i from "./module-d_24.js";
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
