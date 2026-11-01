import n from "./module-A_9.js";
import i from "./module-M_2_8.js";
import o from "./module-aq_8.js";
import s from "./module-e_8.js";
import _a from "./module-A5_8.js";
import u from "./module-vbL_8.js";
import c from "./module-cv_8.js";
import forced from "./module-N_8.js";
const _a_IteratorPrototype = _a.IteratorPrototype;
const h = u(function () {
  return i(this.next, this.iterator);
}, true);
n(
  {
    target: "Iterator",
    stat: true,
    forced,
  },
  {
    from: function (t) {
      const r = c(typeof t === "string" ? o(t) : t, true);
      if (s(_a_IteratorPrototype, r.iterator)) {
        return r.iterator;
      }
      return new h(r);
    },
  },
);
