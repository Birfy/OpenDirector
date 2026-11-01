import n from "./module-A_18.js";
import o from "./module-aq_17.js";
import i from "./module-e_17.js";
import a from "./module-w7_17.js";
import s from "./module-fq_17.js";
import u from "./module-kj_17.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_17.js"),
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
