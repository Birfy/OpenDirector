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
    defineMetadata: function (t, r, e) {
      const n = arguments.length < 4 ? undefined : o_toKey(arguments[3]);
      o_set(t, r, a(e), n);
    },
  },
);
