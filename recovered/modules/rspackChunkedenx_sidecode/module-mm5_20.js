import n from "./module-A_21.js";
import o from "./module-p8_20.js";
import i from "./module-xUg_20.js";
const i_get = i.get;
const i_has = i.has;
const i_set = i.set;
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
      const i = o(this);
      if (i_has(i, t)) {
        e = i_get(i, t);
        if ("update" in r) {
          e = r.update(e, t, i);
          i_set(i, t, e);
        }
        return e;
      }
      n = r.insert(t, i);
      i_set(i, t, n);
      return n;
    },
  },
);
