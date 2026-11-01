import n from "./module-A_6.js";
import i from "./module-aq_5.js";
import o from "./module-e_5.js";
import s from "./module-w7_5.js";
import a from "./module-fq_5.js";
import u from "./module-kj_5.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_5.js"),
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
