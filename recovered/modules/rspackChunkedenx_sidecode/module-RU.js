import n from "./module-A.js";
import o from "./module-O9.js";
import i from "./module-GN.js";
import a from "./module-d.js";
import s from "./module-H_2.js";
const u = o(require("./module-qV.js"));
const c = o([].concat);
const i_keys = i.keys;
const i_toKey = i.toKey;
const l = (t, r) => {
  const e = i_keys(t, r);
  const n = s(t);
  if (n === null) {
    return e;
  }
  const o = l(n, r);
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
      return l(a(t), r);
    },
  },
);
