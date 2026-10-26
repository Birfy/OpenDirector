import n from "./module-Vm_2_20.js";
import { f } from "./module-t_21.js";
import i from "./module-w_21.js";
export default function (t, r, e) {
  const a = n(r);
  if (a in t) {
    f(t, a, i(0, e));
  } else {
    t[a] = e;
  }
}
