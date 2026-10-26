import n from "./module-A_5.js";
import i from "./module-aq_4.js";
import o from "./module-e_4.js";
import s from "./module-w7_4.js";
import a from "./module-fq_4.js";
import u from "./module-kj_4.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_4.js"),
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
