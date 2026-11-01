import n from "./module-b_2.js";
import i from "./module-L7_2.js";
import o from "./module-V3_2.js";
import s from "./module-D_2_2.js";
import a from "./module-II_2.js";
import u from "./module-aq_2.js";
const c = "Object Iterator";
const n_set = n.set;
const h = n.getterFor(c);
export default i(
  function (t, mode) {
    const object = u(t);
    n_set(this, {
      type: c,
      mode,
      object,
      keys: a(object),
      index: 0,
    });
  },
  "Object",
  function () {
    const t = h(this);
    const t_keys = t.keys;
    while (true) {
      if (t_keys === null || t.index >= t_keys.length) {
        t.object = t.keys = null;
        return o(undefined, true);
      }
      const e = t_keys[t.index++];
      const n = t.object;
      if (s(n, e)) {
        switch (t.mode) {
          case "keys":
            return o(e, false);
          case "values":
            return o(n[e], false);
        }
        return o([e, n[e]], false);
      }
    }
  },
);
