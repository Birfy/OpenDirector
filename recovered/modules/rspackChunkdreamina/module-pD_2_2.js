import n from "g";
import i from "B5";
import a from "A8";
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
    emplace: function (t, e) {
      let r;
      let n;
      const a = i(this);
      if (a_has(a, t)) {
        r = a_get(a, t);
        if ("update" in e) {
          r = e.update(r, t, a);
          a_set(a, t, r);
        }
        return r;
      }
      n = e.insert(t, a);
      a_set(a, t, n);
      return n;
    },
  },
);
