import n from "./module-A_14.js";
import o from "./module-GN_13.js";
import i from "./module-d_14.js";
const o_toKey = o.toKey;
const o_set = o.set;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    defineMetadata: function (r, t, e) {
      const n = arguments.length < 4 ? undefined : o_toKey(arguments[3]);
      o_set(r, t, i(e), n);
    },
  },
);
