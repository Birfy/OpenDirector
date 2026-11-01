import n from "./module-A_8.js";
import o from "./module-aq_7.js";
import i from "./module-e_7.js";
import a from "./module-w7_7.js";
import s from "./module-fq_7.js";
import u from "./module-kj_7.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_7.js"),
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
