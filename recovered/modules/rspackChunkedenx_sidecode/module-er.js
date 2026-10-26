import n from "./module-Vm_2.js";
import { f } from "./module-t.js";
import i from "./module-w.js";
export default function (t, r, e) {
  const a = n(r);
  if (a in t) {
    f(t, a, i(0, e));
  } else {
    t[a] = e;
  }
}
