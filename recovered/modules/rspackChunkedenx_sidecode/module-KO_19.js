import n from "./module-A_20.js";
import o from "./module-GN_19.js";
import i from "./module-d_20.js";
import a from "./module-H_2_19.js";
const o_has = o.has;
const o_get = o.get;
const o_toKey = o.toKey;
const f = (r, t, e) => {
  if (o_has(r, t, e)) {
    return o_get(r, t, e);
  }
  const n = a(t);
  if (n !== null) {
    return f(r, n, e);
  }
};
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getMetadata: function (r, t) {
      const e = arguments.length < 3 ? undefined : o_toKey(arguments[2]);
      return f(r, i(t), e);
    },
  },
);
