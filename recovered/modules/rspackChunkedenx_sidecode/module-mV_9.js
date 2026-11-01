import n from "./module-A_10.js";
import o from "./module-aq_9.js";
import i from "./module-e_9.js";
import a from "./module-w7_9.js";
import s from "./module-fq_9.js";
import u from "./module-kj_9.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_9.js"),
  },
  {
    from: function (t) {
      const e = a(typeof t === "string" ? o(t) : t);
      if (i(s, e.iterator)) {
        return e.iterator;
      }
      return new u(e);
    },
  },
);
