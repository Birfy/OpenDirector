import n from "./module-A_23.js";
import i from "./module-M_2_22.js";
import o from "./module-aq_22.js";
import s from "./module-e_22.js";
import _a from "./module-A5_22.js";
import u from "./module-vbL_22.js";
import c from "./module-cv_22.js";
import forced from "./module-N_22.js";
const _a_IteratorPrototype = _a.IteratorPrototype;
const h = u(function () {
  return i(this.next, this.iterator);
}, true);
n(
  {
    target: "Iterator",
    stat: true,
    forced,
  },
  {
    from: function (t) {
      const r = c(typeof t === "string" ? o(t) : t, true);
      if (s(_a_IteratorPrototype, r.iterator)) {
        return r.iterator;
      }
      return new h(r);
    },
  },
);
