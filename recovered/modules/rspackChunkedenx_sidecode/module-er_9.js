import n from "./module-Vm_2_9.js";
import { f } from "./module-t_10.js";
import i from "./module-w_10.js";
export default function (t, e, r) {
  const a = n(e);
  if (a in t) {
    f(t, a, i(0, r));
  } else {
    t[a] = r;
  }
}
