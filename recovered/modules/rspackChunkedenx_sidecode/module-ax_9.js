import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-aq_9.js";
import a from "./module-e_9.js";
import _s from "./module-A5_9.js";
import u from "./module-vbL_9.js";
import c from "./module-cv_9.js";
import forced from "./module-N_9.js";
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
      const e = c(typeof t === "string" ? i(t) : t, true);
      if (a(_s_IteratorPrototype, e.iterator)) {
        return e.iterator;
      }
      return new l(e);
    },
  },
);
