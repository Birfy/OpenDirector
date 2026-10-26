import n from "./module-A_8.js";
import o from "./module-M_2_7.js";
import i from "./module-aq_7.js";
import a from "./module-e_7.js";
import _s from "./module-A5_7.js";
import u from "./module-vbL_7.js";
import c from "./module-cv_7.js";
import forced from "./module-N_7.js";
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
