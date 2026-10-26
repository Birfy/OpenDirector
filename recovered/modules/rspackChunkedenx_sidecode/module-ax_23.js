import n from "./module-A_24.js";
import o from "./module-M_2_23.js";
import i from "./module-aq_23.js";
import a from "./module-e_23.js";
import _s from "./module-A5_23.js";
import c from "./module-vbL_23.js";
import u from "./module-cv_23.js";
import forced from "./module-N_23.js";
const _s_IteratorPrototype = _s.IteratorPrototype;
const l = c(function () {
  return o(this.next, this.iterator);
}, true);
n(
  {
    target: "Iterator",
    stat: true,
    forced,
  },
  {
    from: function (t) {
      const r = u(typeof t === "string" ? i(t) : t, true);
      if (a(_s_IteratorPrototype, r.iterator)) {
        return r.iterator;
      }
      return new l(r);
    },
  },
);
