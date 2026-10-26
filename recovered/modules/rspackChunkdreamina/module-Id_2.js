import n from "./module-c_2.js";
import { f } from "./module-R_2.js";
import i from "./module-M.js";
export default function (e, t, r) {
  const a = n(t);
  if (a in e) {
    f(e, a, i(0, r));
  } else {
    e[a] = r;
  }
}
