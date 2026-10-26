import n from "./module-A_20.js";
import o from "./module-M_2_19.js";
import i from "./module-aq_19.js";
import a from "./module-e_19.js";
import _s from "./module-A5_19.js";
import u from "./module-vbL_19.js";
import c from "./module-cv_19.js";
import forced from "./module-N_19.js";
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
    from: function (r) {
      const t = c(typeof r === "string" ? i(r) : r, true);
      if (a(_s_IteratorPrototype, t.iterator)) {
        return t.iterator;
      }
      return new l(t);
    },
  },
);
