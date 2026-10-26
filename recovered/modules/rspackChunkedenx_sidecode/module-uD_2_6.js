import n from "./module-A_7.js";
import o from "./module-GN_6.js";
import a from "./module-d_7.js";
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
        o_set(t, r, a(e), o_toKey(n));
      };
    },
  },
);
