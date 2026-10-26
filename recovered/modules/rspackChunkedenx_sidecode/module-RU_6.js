import n from "./module-A_7.js";
import o from "./module-O9_6.js";
import a from "./module-GN_6.js";
import i from "./module-d_7.js";
import s from "./module-H_2_6.js";
const c = o(require("./module-qV_7.js"));
const u = o([].concat);
const a_keys = a.keys;
const a_toKey = a.toKey;
const h = (t, r) => {
  const e = a_keys(t, r);
  const n = s(t);
  if (n === null) {
    return e;
  }
  const o = h(n, r);
  if (o.length) {
    if (e.length) {
      return c(u(e, o));
    }
    return o;
  }
  return e;
};
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getMetadataKeys: function (t) {
      const r = arguments.length < 2 ? undefined : a_toKey(arguments[1]);
      return h(i(t), r);
    },
  },
);
