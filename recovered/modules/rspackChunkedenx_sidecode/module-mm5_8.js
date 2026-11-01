import n from "./module-A_9.js";
import i from "./module-p8_8.js";
import o from "./module-xUg_8.js";
const o_get = o.get;
const o_has = o.has;
const o_set = o.set;
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
      const o = i(this);
      if (o_has(o, t)) {
        e = o_get(o, t);
        if ("update" in r) {
          e = r.update(e, t, o);
          o_set(o, t, e);
        }
        return e;
      }
      n = r.insert(t, o);
      o_set(o, t, n);
      return n;
    },
  },
);
