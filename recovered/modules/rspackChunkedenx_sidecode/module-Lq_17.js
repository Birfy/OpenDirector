import n from "./module-A_18.js";
import o from "./module-GN_17.js";
import i from "./module-d_18.js";
const o_get = o.get;
const o_toKey = o.toKey;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getOwnMetadata: function (r, t) {
      const e = arguments.length < 3 ? undefined : o_toKey(arguments[2]);
      return o_get(r, i(t), e);
    },
  },
);
