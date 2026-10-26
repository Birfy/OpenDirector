import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-aq_6.js";
import i from "./module-e_6.js";
import _s from "./module-A5_6.js";
import c from "./module-vbL_6.js";
import u from "./module-cv_6.js";
import forced from "./module-N_6.js";
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
      const r = u(typeof t === "string" ? a(t) : t, true);
      if (i(_s_IteratorPrototype, r.iterator)) {
        return r.iterator;
      }
      return new l(r);
    },
  },
);
