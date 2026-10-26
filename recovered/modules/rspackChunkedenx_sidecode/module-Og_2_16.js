import n from "./module-A_17.js";
import o from "./module-GN_16.js";
import i from "./module-d_17.js";
import a from "./module-H_2_16.js";
const o_has = o.has;
const o_toKey = o.toKey;
const c = (t, r, e) => {
  if (o_has(t, r, e)) {
    return true;
  }
  const n = a(r);
  return n !== null && c(t, n, e);
};
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    hasMetadata: function (t, r) {
      const e = arguments.length < 3 ? undefined : o_toKey(arguments[2]);
      return c(t, i(r), e);
    },
  },
);
