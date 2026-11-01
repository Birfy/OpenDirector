import $ from "./module-A_13.js";
import tt from "./module-O9_12.js";
import te from "./module-vo_12.js";
import tr from "./module-vj_13.js";
import tn from "./module-xK_12.js";
import ti from "./module-e7_12.js";
import forced from "./module-N_12.js";
const ti_Map = ti.Map;
const ti_has = ti.has;
const ti_get = ti.get;
const ti_set = ti.set;
const tc = tt([].push);
$(
  {
    target: "Map",
    stat: true,
    forced,
  },
  {
    groupBy: function (J, Z) {
      tr(J);
      te(Z);
      const Q = new ti_Map();
      let $ = 0;
      tn(J, function (J) {
        const tt = Z(J, $++);
        if (ti_has(Q, tt)) {
          tc(ti_get(Q, tt), J);
        } else {
          ti_set(Q, tt, [J]);
        }
      });
      return Q;
    },
  },
);
