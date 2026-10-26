import n from "./module-A_12.js";
import o from "./module-aq_11.js";
import i from "./module-e_11.js";
import a from "./module-w7_11.js";
import s from "./module-fq_11.js";
import u from "./module-kj_11.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_11.js"),
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
