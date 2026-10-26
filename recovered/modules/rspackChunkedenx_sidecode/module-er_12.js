import $ from "./module-Vm_2_12.js";
import { f } from "./module-t_13.js";
import te from "./module-w_13.js";
export default function (J, Z, Q) {
  const tr = $(Z);
  if (tr in J) {
    f(J, tr, te(0, Q));
  } else {
    J[tr] = Q;
  }
}
