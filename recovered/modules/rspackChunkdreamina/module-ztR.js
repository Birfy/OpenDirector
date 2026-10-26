import n from "./module-G_2.js";
import o from "./module-ib_3.js";
import i from "./module-SM_4.js";
import a from "./module-h.js";
import s from "./module-W_2.js";
import u from "./module-O_2.js";
const c = "Object Iterator";
const n_set = n.set;
const l = n.getterFor(c);
export default o(
  function (e, mode) {
    const object = u(e);
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
    const e = l(this);
    const e_keys = e.keys;
    while (true) {
      if (e_keys === null || e.index >= e_keys.length) {
        e.object = e.keys = null;
        return i(undefined, true);
      }
      const r = e_keys[e.index++];
      const n = e.object;
      if (a(n, r)) {
        switch (e.mode) {
          case "keys":
            return i(r, false);
          case "values":
            return i(n[r], false);
        }
        return i([r, n[r]], false);
      }
    }
  },
);
