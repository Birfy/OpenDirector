import n from "./module-A_3.js";
import i from "./module-aq_2.js";
import o from "./module-e_2.js";
import s from "./module-w7_2.js";
import a from "./module-fq_2.js";
import u from "./module-kj_2.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_2.js"),
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
