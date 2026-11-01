import $ from "./module-A_13.js";
import tt from "./module-r9_12.js";
import forced from "./module-hP_2_12.js";
import tr from "./module-aq_12.js";
import tn from "./module-Vm_2_12.js";
import ti from "./module-H_2_12.js";
import { f } from "./module-R_12.js";
if (tt) {
  $(
    {
      target: "Object",
      proto: true,
      forced,
    },
    {
      __lookupGetter__: function (J) {
        let Z;
        let Q = tr(this);
        const $ = tn(J);
        do {
          if ((Z = f(Q, $))) {
            return Z.get;
          }
        } while ((Q = ti(Q)));
      },
    },
  );
}
