import n from "./module-A_7.js";
import o from "./module-aq_6.js";
import a from "./module-e_6.js";
import i from "./module-w7_6.js";
import s from "./module-fq_6.js";
import c from "./module-kj_6.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_6.js"),
  },
  {
    from: function (t) {
      const r = i(typeof t === "string" ? o(t) : t);
      if (a(s, r.iterator)) {
        return r.iterator;
      }
      return new c(r);
    },
  },
);
