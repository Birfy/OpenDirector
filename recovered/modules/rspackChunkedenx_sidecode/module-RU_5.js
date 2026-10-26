import n from "./module-A_6.js";
import i from "./module-O9_5.js";
import o from "./module-GN_5.js";
import s from "./module-d_6.js";
import a from "./module-H_2_5.js";
const u = i(require("./module-qV_6.js"));
const c = i([].concat);
const o_keys = o.keys;
const o_toKey = o.toKey;
const l = (t, r) => {
  const e = o_keys(t, r);
  const n = a(t);
  if (n === null) {
    return e;
  }
  const i = l(n, r);
  if (i.length) {
    if (e.length) {
      return u(c(e, i));
    }
    return i;
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
      const r = arguments.length < 2 ? undefined : o_toKey(arguments[1]);
      return l(s(t), r);
    },
  },
);
