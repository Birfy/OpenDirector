import n from "./module-D_2_20.js";
import o from "./module-or_20.js";
import { f as f_1 } from "./module-R_20.js";
import { f as f_2 } from "./module-t_21.js";
export default function (t, r, e) {
  for (let s = o(r), c = f_2, u = f_1, f = 0; f < s.length; f++) {
    const l = s[f];
    if (!(n(t, l) || (e && n(e, l)))) {
      c(t, l, u(r, l));
    }
  }
}
