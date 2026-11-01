import n from "./module-D_2_10.js";
import o from "./module-or_10.js";
import { f as f_1 } from "./module-R_10.js";
import { f as f_2 } from "./module-t_11.js";
export default function (t, r, e) {
  for (let s = o(r), u = f_2, c = f_1, f = 0; f < s.length; f++) {
    const l = s[f];
    if (!(n(t, l) || (e && n(e, l)))) {
      u(t, l, c(r, l));
    }
  }
}
