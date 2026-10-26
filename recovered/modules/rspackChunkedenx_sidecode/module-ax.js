import n from "./module-A.js";
import o from "./module-M_2.js";
import i from "./module-aq.js";
import a from "./module-e.js";
import _s from "./module-A5.js";
import u from "./module-vbL.js";
import c from "./module-cv.js";
import forced from "./module-N.js";
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
    from: function (t) {
      const r = c(typeof t === "string" ? i(t) : t, true);
      if (a(_s_IteratorPrototype, r.iterator)) {
        return r.iterator;
      }
      return new h(r);
    },
  },
);
