import n from "./module-A_9.js";
import i from "./module-aq_8.js";
import o from "./module-e_8.js";
import s from "./module-w7_8.js";
import a from "./module-fq_8.js";
import u from "./module-kj_8.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_8.js"),
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
