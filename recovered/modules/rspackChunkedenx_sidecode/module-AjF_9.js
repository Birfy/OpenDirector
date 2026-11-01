import n from "./module-A_10.js";
import o from "./module-ot_10.js";
import i from "./module-e7_9.js";
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
    emplace: function (t, e) {
      let r;
      let n;
      const i = o(this);
      if (i_has(i, t)) {
        r = i_get(i, t);
        if ("update" in e) {
          r = e.update(r, t, i);
          i_set(i, t, r);
        }
        return r;
      }
      n = e.insert(t, i);
      i_set(i, t, n);
      return n;
    },
  },
);
