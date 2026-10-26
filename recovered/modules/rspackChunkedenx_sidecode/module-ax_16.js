import n from "./module-A_17.js";
import o from "./module-M_2_16.js";
import i from "./module-aq_16.js";
import a from "./module-e_16.js";
import _s from "./module-A5_16.js";
import u from "./module-vbL_16.js";
import c from "./module-cv_16.js";
import forced from "./module-N_16.js";
const _s_IteratorPrototype = _s.IteratorPrototype;
const l = u(function () {
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
      const r = c(typeof t === "string" ? i(t) : t, true);
      if (a(_s_IteratorPrototype, r.iterator)) {
        return r.iterator;
      }
      return new l(r);
    },
  },
);
