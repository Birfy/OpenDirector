import n from "./module-A_19.js";
import o from "./module-aq_18.js";
import i from "./module-e_18.js";
import a from "./module-w7_18.js";
import s from "./module-fq_18.js";
import u from "./module-kj_18.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_18.js"),
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
