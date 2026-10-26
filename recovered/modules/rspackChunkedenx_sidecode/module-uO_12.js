import $ from "./module-A_13.js";
import tt from "./module-YR_12.js";
import te from "./module-O9_12.js";
import tr from "./module-vo_12.js";
import tn from "./module-vj_13.js";
import ti from "./module-Vm_2_12.js";
import to from "./module-xK_12.js";
const ta = tt("Object", "create");
const ts = te([].push);
$(
  {
    target: "Object",
    stat: true,
  },
  {
    groupBy: function (J, Z) {
      tn(J);
      tr(Z);
      const Q = ta(null);
      let $ = 0;
      to(J, function (J) {
        const tt = ti(Z(J, $++));
        if (tt in Q) {
          ts(Q[tt], J);
        } else {
          Q[tt] = [J];
        }
      });
      return Q;
    },
  },
);
