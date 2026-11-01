import n from "./module-Vm_2_3.js";
import { f } from "./module-t_4.js";
import o from "./module-w_4.js";
export default function (t, r, e) {
  const s = n(r);
  if (s in t) {
    f(t, s, o(0, e));
  } else {
    t[s] = e;
  }
}
