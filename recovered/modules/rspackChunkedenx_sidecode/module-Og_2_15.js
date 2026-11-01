import n from "./module-A_16.js";
import o from "./module-GN_15.js";
import i from "./module-d_16.js";
import a from "./module-H_2_15.js";
const o_has = o.has;
const o_toKey = o.toKey;
const c = (r, t, e) => {
  if (o_has(r, t, e)) {
    return true;
  }
  const n = a(t);
  return n !== null && c(r, n, e);
};
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    hasMetadata: function (r, t) {
      const e = arguments.length < 3 ? undefined : o_toKey(arguments[2]);
      return c(r, i(t), e);
    },
  },
);
