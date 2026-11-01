import $ from "./module-A_13.js";
import tt from "./module-aq_12.js";
import te from "./module-e_12.js";
import tr from "./module-w7_12.js";
import tn from "./module-fq_12.js";
import ti from "./module-kj_12.js";
$(
  {
    target: "AsyncIterator",
    stat: true,
    forced: require("./module-N_12.js"),
  },
  {
    from: function (J) {
      const Z = tr(typeof J === "string" ? tt(J) : J);
      if (te(tn, Z.iterator)) {
        return Z.iterator;
      }
      return new ti(Z);
    },
  },
);
