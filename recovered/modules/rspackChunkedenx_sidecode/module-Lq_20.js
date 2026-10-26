import n from "./module-A_21.js";
import o from "./module-GN_20.js";
import i from "./module-d_21.js";
const o_get = o.get;
const o_toKey = o.toKey;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getOwnMetadata: function (t, r) {
      const e = arguments.length < 3 ? undefined : o_toKey(arguments[2]);
      return o_get(t, i(r), e);
    },
  },
);
