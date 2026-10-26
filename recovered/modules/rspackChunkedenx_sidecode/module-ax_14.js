import n from "./module-A_15.js";
import o from "./module-M_2_14.js";
import i from "./module-aq_14.js";
import a from "./module-e_14.js";
import _s from "./module-A5_14.js";
import c from "./module-vbL_14.js";
import u from "./module-cv_14.js";
import forced from "./module-N_14.js";
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
