import n from "./module-A_23.js";
import i from "./module-aq_22.js";
import o from "./module-e_22.js";
import s from "./module-w7_22.js";
import a from "./module-fq_22.js";
import u from "./module-kj_22.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_22.js"),
  },
  {
    from: function (t) {
      const r = s(typeof t === "string" ? i(t) : t);
      if (o(a, r.iterator)) {
        return r.iterator;
      }
      return new u(r);
    },
  },
);
