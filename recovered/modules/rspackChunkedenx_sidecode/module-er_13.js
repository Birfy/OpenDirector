import n from "./module-Vm_2_13.js";
import { f } from "./module-t_14.js";
import i from "./module-w_14.js";
export default function (r, t, e) {
  const a = n(t);
  if (a in r) {
    f(r, a, i(0, e));
  } else {
    r[a] = e;
  }
}
