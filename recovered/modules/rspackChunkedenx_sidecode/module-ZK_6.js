import n from "./module-A_7.js";
import o from "./module-GN_6.js";
import a from "./module-d_7.js";
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
      return o_has(t, a(r), e);
    },
  },
);
