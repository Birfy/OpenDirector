import n from "./module-A_17.js";
import o from "./module-aq_16.js";
import i from "./module-e_16.js";
import a from "./module-w7_16.js";
import s from "./module-fq_16.js";
import u from "./module-kj_16.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_16.js"),
  },
  {
    from: function (t) {
      const r = a(typeof t === "string" ? o(t) : t);
      if (i(s, r.iterator)) {
        return r.iterator;
      }
      return new u(r);
    },
  },
);
