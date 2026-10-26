import n from "./module-D_2_7.js";
import o from "./module-or_7.js";
import { f as f_1 } from "./module-R_7.js";
import { f as f_2 } from "./module-t_8.js";
export default function (r, t, e) {
  for (let s = o(t), u = f_2, c = f_1, f = 0; f < s.length; f++) {
    const l = s[f];
    if (!(n(r, l) || (e && n(e, l)))) {
      u(r, l, c(t, l));
    }
  }
}
