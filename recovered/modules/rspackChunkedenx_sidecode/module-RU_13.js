import n from "./module-A_14.js";
import o from "./module-O9_13.js";
import i from "./module-GN_13.js";
import a from "./module-d_14.js";
import s from "./module-H_2_13.js";
const u = o(require("./module-qV_14.js"));
const c = o([].concat);
const i_keys = i.keys;
const i_toKey = i.toKey;
const l = (r, t) => {
  const e = i_keys(r, t);
  const n = s(r);
  if (n === null) {
    return e;
  }
  const o = l(n, t);
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
    getMetadataKeys: function (r) {
      const t = arguments.length < 2 ? undefined : i_toKey(arguments[1]);
      return l(a(r), t);
    },
  },
);
