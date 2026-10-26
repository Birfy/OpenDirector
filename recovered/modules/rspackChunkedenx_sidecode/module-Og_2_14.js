import n from "./module-A_15.js";
import o from "./module-GN_14.js";
import i from "./module-d_15.js";
import a from "./module-H_2_14.js";
const o_has = o.has;
const o_toKey = o.toKey;
const u = (t, r, e) => {
  if (o_has(t, r, e)) {
    return true;
  }
  const n = a(r);
  return n !== null && u(t, n, e);
};
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    hasMetadata: function (t, r) {
      const e = arguments.length < 3 ? undefined : o_toKey(arguments[2]);
      return u(t, i(r), e);
    },
  },
);
