import n from "./module-A_10.js";
import o from "./module-GN_9.js";
import i from "./module-d_10.js";
const o_toKey = o.toKey;
const o_set = o.set;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    metadata: function (t, e) {
      return function (r, n) {
        o_set(t, e, i(r), o_toKey(n));
      };
    },
  },
);
