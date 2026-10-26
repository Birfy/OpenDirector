import n from "./module-A_21.js";
import o from "./module-aq_20.js";
import i from "./module-e_20.js";
import a from "./module-w7_20.js";
import s from "./module-fq_20.js";
import c from "./module-kj_20.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_20.js"),
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
