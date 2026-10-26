import n from "./module-A_22.js";
import i from "./module-GN_21.js";
import o from "./module-d_22.js";
const i_toKey = i.toKey;
const i_set = i.set;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    metadata: function (t, r) {
      return function (e, n) {
        i_set(t, r, o(e), i_toKey(n));
      };
    },
  },
);
