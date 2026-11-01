import n from "./module-A_20.js";
import o from "./module-aq_19.js";
import i from "./module-e_19.js";
import a from "./module-w7_19.js";
import s from "./module-fq_19.js";
import u from "./module-kj_19.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_19.js"),
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
