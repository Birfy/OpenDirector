import n from "./module-A_22.js";
import i from "./module-aq_21.js";
import o from "./module-e_21.js";
import s from "./module-w7_21.js";
import a from "./module-fq_21.js";
import u from "./module-kj_21.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_21.js"),
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
