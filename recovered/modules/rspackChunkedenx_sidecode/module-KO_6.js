import n from "./module-A_7.js";
import o from "./module-GN_6.js";
import a from "./module-d_7.js";
import i from "./module-H_2_6.js";
const o_has = o.has;
const o_get = o.get;
const o_toKey = o.toKey;
const f = (t, r, e) => {
  if (o_has(t, r, e)) {
    return o_get(t, r, e);
  }
  const n = i(r);
  if (n !== null) {
    return f(t, n, e);
  }
};
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getMetadata: function (t, r) {
      const e = arguments.length < 3 ? undefined : o_toKey(arguments[2]);
      return f(t, a(r), e);
    },
  },
);
