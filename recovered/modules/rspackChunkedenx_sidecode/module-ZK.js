import n from "./module-A.js";
import o from "./module-GN.js";
import i from "./module-d.js";
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
