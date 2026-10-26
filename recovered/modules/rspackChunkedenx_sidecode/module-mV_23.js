import n from "./module-A_24.js";
import o from "./module-aq_23.js";
import i from "./module-e_23.js";
import a from "./module-w7_23.js";
import s from "./module-fq_23.js";
import c from "./module-kj_23.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_23.js"),
  },
  {
    from: function (t) {
      const r = a(typeof t === "string" ? o(t) : t);
      if (i(s, r.iterator)) {
        return r.iterator;
      }
      return new c(r);
    },
  },
);
