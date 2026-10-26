import $ from "./module-A_13.js";
import tt from "./module-ot_13.js";
import te from "./module-e7_12.js";
const te_get = te.get;
const te_has = te.has;
const te_set = te.set;
$(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    emplace: function (J, Z) {
      let Q;
      let $;
      const te = tt(this);
      if (te_has(te, J)) {
        Q = te_get(te, J);
        if ("update" in Z) {
          Q = Z.update(Q, J, te);
          te_set(te, J, Q);
        }
        return Q;
      }
      $ = Z.insert(J, te);
      te_set(te, J, $);
      return $;
    },
  },
);
