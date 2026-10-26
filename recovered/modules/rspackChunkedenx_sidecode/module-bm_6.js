import n from "./module-A_7.js";
import o from "./module-GN_6.js";
import a from "./module-d_7.js";
const o_keys = o.keys;
const o_toKey = o.toKey;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getOwnMetadataKeys: function (t) {
      const r = arguments.length < 2 ? undefined : o_toKey(arguments[1]);
      return o_keys(a(t), r);
    },
  },
);
