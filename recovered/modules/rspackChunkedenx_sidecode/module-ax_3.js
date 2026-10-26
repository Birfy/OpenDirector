import n from "./module-A_4.js";
import i from "./module-M_2_3.js";
import o from "./module-aq_3.js";
import s from "./module-e_3.js";
import _a from "./module-A5_3.js";
import u from "./module-vbL_3.js";
import c from "./module-cv_3.js";
import forced from "./module-N_3.js";
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
