import n from "./module-A_10.js";
import o from "./module-O9_9.js";
import i from "./module-GN_9.js";
import a from "./module-d_10.js";
import s from "./module-H_2_9.js";
const u = o(require("./module-qV_10.js"));
const c = o([].concat);
const i_keys = i.keys;
const i_toKey = i.toKey;
const h = (t, e) => {
  const r = i_keys(t, e);
  const n = s(t);
  if (n === null) {
    return r;
  }
  const o = h(n, e);
  if (o.length) {
    if (r.length) {
      return u(c(r, o));
    }
    return o;
  }
  return r;
};
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getMetadataKeys: function (t) {
      const e = arguments.length < 2 ? undefined : i_toKey(arguments[1]);
      return h(a(t), e);
    },
  },
);
