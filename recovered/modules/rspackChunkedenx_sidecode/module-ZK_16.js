import n from "./module-A_17.js";
import o from "./module-GN_16.js";
import i from "./module-d_17.js";
const o_has = o.has;
const o_toKey = o.toKey;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    hasOwnMetadata: function (t, r) {
      const e = arguments.length < 3 ? undefined : o_toKey(arguments[2]);
      return o_has(t, i(r), e);
    },
  },
);
