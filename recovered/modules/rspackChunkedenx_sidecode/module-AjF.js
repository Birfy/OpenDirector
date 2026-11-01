import n from "./module-A.js";
import o from "./module-ot.js";
import i from "./module-e7.js";
const i_get = i.get;
const i_has = i.has;
const i_set = i.set;
n(
  {
    target: "Map",
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
