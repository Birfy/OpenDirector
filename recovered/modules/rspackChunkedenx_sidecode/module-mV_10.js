import n from "./module-A_11.js";
import o from "./module-aq_10.js";
import i from "./module-e_10.js";
import a from "./module-w7_10.js";
import s from "./module-fq_10.js";
import u from "./module-kj_10.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_10.js"),
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
