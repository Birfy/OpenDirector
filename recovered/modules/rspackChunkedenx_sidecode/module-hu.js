import n from "./module-b.js";
import o from "./module-L7.js";
import i from "./module-V3.js";
import a from "./module-D_2.js";
import s from "./module-II.js";
import u from "./module-aq.js";
const c = "Object Iterator";
const n_set = n.set;
const h = n.getterFor(c);
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
    const t = h(this);
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
