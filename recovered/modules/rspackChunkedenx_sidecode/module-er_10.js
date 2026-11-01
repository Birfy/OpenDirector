import n from "./module-Vm_2_10.js";
import { f } from "./module-t_11.js";
import i from "./module-w_11.js";
export default function (t, r, e) {
  const a = n(r);
  if (a in t) {
    f(t, a, i(0, e));
  } else {
    t[a] = e;
  }
}
