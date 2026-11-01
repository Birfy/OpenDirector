import n from "./module-Vm_2_4.js";
import { f } from "./module-t_5.js";
import o from "./module-w_5.js";
export default function (t, r, e) {
  const s = n(r);
  if (s in t) {
    f(t, s, o(0, e));
  } else {
    t[s] = e;
  }
}
