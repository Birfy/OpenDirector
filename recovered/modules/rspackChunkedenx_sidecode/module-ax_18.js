import n from "./module-A_19.js";
import o from "./module-M_2_18.js";
import i from "./module-aq_18.js";
import a from "./module-e_18.js";
import _s from "./module-A5_18.js";
import u from "./module-vbL_18.js";
import c from "./module-cv_18.js";
import forced from "./module-N_18.js";
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
