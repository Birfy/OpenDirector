import n from "./module-A_19.js";
import o from "./module-GN_18.js";
import i from "./module-d_19.js";
const o_has = o.has;
const o_toKey = o.toKey;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    hasOwnMetadata: function (r, t) {
      const e = arguments.length < 3 ? undefined : o_toKey(arguments[2]);
      return o_has(r, i(t), e);
    },
  },
);
