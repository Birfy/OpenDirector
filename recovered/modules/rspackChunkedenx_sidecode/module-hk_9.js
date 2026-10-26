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
    defineMetadata: function (t, e, r) {
      const n = arguments.length < 4 ? undefined : o_toKey(arguments[3]);
      o_set(t, e, i(r), n);
    },
  },
);
