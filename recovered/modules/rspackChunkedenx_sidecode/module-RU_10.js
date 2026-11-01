import n from "./module-A_11.js";
import o from "./module-O9_10.js";
import i from "./module-GN_10.js";
import a from "./module-d_11.js";
import s from "./module-H_2_10.js";
const u = o(require("./module-qV_11.js"));
const c = o([].concat);
const i_keys = i.keys;
const i_toKey = i.toKey;
const h = (t, r) => {
  const e = i_keys(t, r);
  const n = s(t);
  if (n === null) {
    return e;
  }
  const o = h(n, r);
  if (o.length) {
    if (e.length) {
      return u(c(e, o));
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
      const r = arguments.length < 2 ? undefined : i_toKey(arguments[1]);
      return h(a(t), r);
    },
  },
);
