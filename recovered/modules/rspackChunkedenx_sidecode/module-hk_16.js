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
    defineMetadata: function (t, r, e) {
      const n = arguments.length < 4 ? undefined : o_toKey(arguments[3]);
      o_set(t, r, i(e), n);
    },
  },
);
