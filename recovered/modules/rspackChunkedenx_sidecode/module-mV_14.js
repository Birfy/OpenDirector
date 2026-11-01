import n from "./module-A_15.js";
import o from "./module-aq_14.js";
import i from "./module-e_14.js";
import a from "./module-w7_14.js";
import s from "./module-fq_14.js";
import c from "./module-kj_14.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_14.js"),
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
