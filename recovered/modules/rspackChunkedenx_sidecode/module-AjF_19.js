import n from "./module-A_20.js";
import o from "./module-ot_20.js";
import i from "./module-e7_19.js";
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
    emplace: function (r, t) {
      let e;
      let n;
      const i = o(this);
      if (i_has(i, r)) {
        e = i_get(i, r);
        if ("update" in t) {
          e = t.update(e, r, i);
          i_set(i, r, e);
        }
        return e;
      }
      n = t.insert(r, i);
      i_set(i, r, n);
      return n;
    },
  },
);
