import n from "./module-b_6.js";
import o from "./module-L7_6.js";
import a from "./module-V3_6.js";
import i from "./module-D_2_6.js";
import s from "./module-II_6.js";
import c from "./module-aq_6.js";
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
        return a(undefined, true);
      }
      const e = t_keys[t.index++];
      const n = t.object;
      if (i(n, e)) {
        switch (t.mode) {
          case "keys":
            return a(e, false);
          case "values":
            return a(n[e], false);
        }
        return a([e, n[e]], false);
      }
    }
  },
);
