import n from "./module-A_10.js";
import o from "./module-GN_9.js";
import i from "./module-d_10.js";
import a from "./module-H_2_9.js";
const o_has = o.has;
const o_toKey = o.toKey;
const c = (t, e, r) => {
  if (o_has(t, e, r)) {
    return true;
  }
  const n = a(e);
  return n !== null && c(t, n, r);
};
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    hasMetadata: function (t, e) {
      const r = arguments.length < 3 ? undefined : o_toKey(arguments[2]);
      return c(t, i(e), r);
    },
  },
);
