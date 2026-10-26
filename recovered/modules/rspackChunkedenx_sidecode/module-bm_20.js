import n from "./module-A_21.js";
import o from "./module-GN_20.js";
import i from "./module-d_21.js";
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
      return o_keys(i(t), r);
    },
  },
);
