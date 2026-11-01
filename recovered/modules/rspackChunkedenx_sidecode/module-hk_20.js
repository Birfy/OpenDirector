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
    defineMetadata: function (t, r, e) {
      const n = arguments.length < 4 ? undefined : o_toKey(arguments[3]);
      o_set(t, r, i(e), n);
    },
  },
);
