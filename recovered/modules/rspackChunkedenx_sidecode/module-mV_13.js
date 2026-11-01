import n from "./module-A_14.js";
import o from "./module-aq_13.js";
import i from "./module-e_13.js";
import a from "./module-w7_13.js";
import s from "./module-fq_13.js";
import u from "./module-kj_13.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_13.js"),
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
