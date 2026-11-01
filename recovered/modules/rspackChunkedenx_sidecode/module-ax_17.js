import n from "./module-A_18.js";
import o from "./module-M_2_17.js";
import i from "./module-aq_17.js";
import a from "./module-e_17.js";
import _s from "./module-A5_17.js";
import u from "./module-vbL_17.js";
import c from "./module-cv_17.js";
import forced from "./module-N_17.js";
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
