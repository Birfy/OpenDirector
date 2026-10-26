import n from "./module-A_9.js";
import i from "./module-GN_8.js";
import o from "./module-d_9.js";
const i_has = i.has;
const i_toKey = i.toKey;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    hasOwnMetadata: function (t, r) {
      const e = arguments.length < 3 ? undefined : i_toKey(arguments[2]);
      return i_has(t, o(r), e);
    },
  },
);
