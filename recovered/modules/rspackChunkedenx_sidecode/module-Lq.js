import n from "./module-A.js";
import o from "./module-GN.js";
import i from "./module-d.js";
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
