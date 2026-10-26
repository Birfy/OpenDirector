import $ from "./module-D_2_12.js";
import tt from "./module-or_12.js";
import { f } from "./module-R_12.js";
import { f as f_1 } from "./module-t_13.js";
export default function (J, Z, Q) {
  for (let tn = tt(Z), ti = f_1, to = f, ta = 0; ta < tn.length; ta++) {
    const ts = tn[ta];
    if (!($(J, ts) || (Q && $(Q, ts)))) {
      ti(J, ts, to(Z, ts));
    }
  }
}
