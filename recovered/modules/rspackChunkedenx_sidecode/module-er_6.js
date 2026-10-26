import n from "./module-Vm_2_6.js";
import { f } from "./module-t_7.js";
import a from "./module-w_7.js";
export default function (t, r, e) {
  const i = n(r);
  if (i in t) {
    f(t, i, a(0, e));
  } else {
    t[i] = e;
  }
}
