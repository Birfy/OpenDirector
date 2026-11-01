import n from "./module-A_21.js";
import o from "./module-O9_20.js";
import i from "./module-GN_20.js";
import a from "./module-d_21.js";
import s from "./module-H_2_20.js";
const c = o(require("./module-qV_21.js"));
const u = o([].concat);
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
      const r = arguments.length < 2 ? undefined : i_toKey(arguments[1]);
      return h(a(t), r);
    },
  },
);
