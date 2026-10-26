import n from "./module-b_16.js";
import o from "./module-L7_16.js";
import i from "./module-V3_16.js";
import a from "./module-D_2_16.js";
import s from "./module-II_16.js";
import u from "./module-aq_16.js";
const c = "Object Iterator";
const n_set = n.set;
const l = n.getterFor(c);
export default o(
  function (t, mode) {
    const object = u(t);
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
    const t = l(this);
    const t_keys = t.keys;
    while (true) {
      if (t_keys === null || t.index >= t_keys.length) {
        t.object = t.keys = null;
        return i(undefined, true);
      }
      const e = t_keys[t.index++];
      const n = t.object;
      if (a(n, e)) {
        switch (t.mode) {
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
