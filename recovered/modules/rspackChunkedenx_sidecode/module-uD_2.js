import n from "./module-A.js";
import o from "./module-GN.js";
import i from "./module-d.js";
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
