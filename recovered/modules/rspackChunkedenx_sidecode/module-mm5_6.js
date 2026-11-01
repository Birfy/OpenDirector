import n from "./module-A_7.js";
import o from "./module-p8_6.js";
import a from "./module-xUg_6.js";
const a_get = a.get;
const a_has = a.has;
const a_set = a.set;
n(
  {
    target: "WeakMap",
    proto: true,
    real: true,
    forced: true,
  },
  {
    emplace: function (t, r) {
      let e;
      let n;
      const a = o(this);
      if (a_has(a, t)) {
        e = a_get(a, t);
        if ("update" in r) {
          e = r.update(e, t, a);
          a_set(a, t, e);
        }
        return e;
      }
      n = r.insert(t, a);
      a_set(a, t, n);
      return n;
    },
  },
);
