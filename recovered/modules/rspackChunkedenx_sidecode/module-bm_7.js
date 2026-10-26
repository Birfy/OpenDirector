import n from "./module-A_8.js";
import o from "./module-GN_7.js";
import i from "./module-d_8.js";
const o_keys = o.keys;
const o_toKey = o.toKey;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getOwnMetadataKeys: function (r) {
      const t = arguments.length < 2 ? undefined : o_toKey(arguments[1]);
      return o_keys(i(r), t);
    },
  },
);
