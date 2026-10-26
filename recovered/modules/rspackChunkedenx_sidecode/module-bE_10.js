import n from "./module-D_2_9.js";
import o from "./module-or_9.js";
import { f as f_1 } from "./module-R_9.js";
import { f as f_2 } from "./module-t_10.js";
export default function (t, e, r) {
  for (let s = o(e), u = f_2, c = f_1, f = 0; f < s.length; f++) {
    const l = s[f];
    if (!(n(t, l) || (r && n(r, l)))) {
      u(t, l, c(e, l));
    }
  }
}
