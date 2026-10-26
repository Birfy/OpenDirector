import n from "./module-A_16.js";
import o from "./module-aq_15.js";
import i from "./module-e_15.js";
import a from "./module-w7_15.js";
import s from "./module-fq_15.js";
import u from "./module-kj_15.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_15.js"),
  },
  {
    from: function (r) {
      const t = a(typeof r === "string" ? o(r) : r);
      if (i(s, t.iterator)) {
        return t.iterator;
      }
      return new u(t);
    },
  },
);
