import n from "./module-A_3.js";
import i from "./module-GN_2.js";
import o from "./module-d_3.js";
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
