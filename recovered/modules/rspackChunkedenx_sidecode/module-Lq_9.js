import n from "./module-A_10.js";
import o from "./module-GN_9.js";
import i from "./module-d_10.js";
const o_get = o.get;
const o_toKey = o.toKey;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getOwnMetadata: function (t, e) {
      const r = arguments.length < 3 ? undefined : o_toKey(arguments[2]);
      return o_get(t, i(e), r);
    },
  },
);
