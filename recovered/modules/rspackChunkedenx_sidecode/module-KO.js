import n from "./module-A.js";
import o from "./module-GN.js";
import i from "./module-d.js";
import a from "./module-H_2.js";
const o_has = o.has;
const o_get = o.get;
const o_toKey = o.toKey;
const f = (t, r, e) => {
  if (o_has(t, r, e)) {
    return o_get(t, r, e);
  }
  const n = a(r);
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
      return f(t, i(r), e);
    },
  },
);
