import n from "./module-Vm_2_18.js";
import { f } from "./module-t_19.js";
import i from "./module-w_19.js";
export default function (r, t, e) {
  const a = n(t);
  if (a in r) {
    f(r, a, i(0, e));
  } else {
    r[a] = e;
  }
}
