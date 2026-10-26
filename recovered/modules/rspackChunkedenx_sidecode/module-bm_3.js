import n from "./module-A_4.js";
import i from "./module-GN_3.js";
import o from "./module-d_4.js";
const i_keys = i.keys;
const i_toKey = i.toKey;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getOwnMetadataKeys: function (t) {
      const r = arguments.length < 2 ? undefined : i_toKey(arguments[1]);
      return i_keys(o(t), r);
    },
  },
);
