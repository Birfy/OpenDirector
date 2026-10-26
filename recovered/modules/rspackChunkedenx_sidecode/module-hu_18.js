import n from "./module-b_18.js";
import o from "./module-L7_18.js";
import i from "./module-V3_18.js";
import a from "./module-D_2_18.js";
import s from "./module-II_18.js";
import u from "./module-aq_18.js";
const c = "Object Iterator";
const n_set = n.set;
const h = n.getterFor(c);
export default o(
  function (r, mode) {
    const object = u(r);
    n_set(this, {
      type: c,
      mode,
      object,
      keys: s(object),
      index: 0,
    });
  },
  "Object",
  function () {
    const r = h(this);
    const r_keys = r.keys;
    while (true) {
      if (r_keys === null || r.index >= r_keys.length) {
        r.object = r.keys = null;
        return i(undefined, true);
      }
      const e = r_keys[r.index++];
      const n = r.object;
      if (a(n, e)) {
        switch (r.mode) {
          case "keys":
            return i(e, false);
          case "values":
            return i(n[e], false);
        }
        return i([e, n[e]], false);
      }
    }
  },
);
