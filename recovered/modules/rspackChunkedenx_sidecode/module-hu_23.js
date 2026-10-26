import n from "./module-b_23.js";
import o from "./module-L7_23.js";
import i from "./module-V3_23.js";
import a from "./module-D_2_23.js";
import s from "./module-II_23.js";
import c from "./module-aq_23.js";
const u = "Object Iterator";
const n_set = n.set;
const l = n.getterFor(u);
export default o(
  function (t, mode) {
    const object = c(t);
    n_set(this, {
      type: u,
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
