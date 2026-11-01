import n from "./module-A_12.js";
import o from "./module-M_2_11.js";
import i from "./module-aq_11.js";
import a from "./module-e_11.js";
import _s from "./module-A5_11.js";
import u from "./module-vbL_11.js";
import c from "./module-cv_11.js";
import forced from "./module-N_11.js";
const _s_IteratorPrototype = _s.IteratorPrototype;
const h = u(function () {
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
      return new h(t);
    },
  },
);
