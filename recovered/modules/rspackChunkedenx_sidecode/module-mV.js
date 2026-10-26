import n from "./module-A.js";
import o from "./module-aq.js";
import i from "./module-e.js";
import a from "./module-w7.js";
import s from "./module-fq.js";
import u from "./module-kj.js";
n(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N.js"),
  },
  {
    from: function (t) {
      const r = a(typeof t === "string" ? o(t) : t);
      if (i(s, r.iterator)) {
        return r.iterator;
      }
      return new u(r);
    },
  },
);
