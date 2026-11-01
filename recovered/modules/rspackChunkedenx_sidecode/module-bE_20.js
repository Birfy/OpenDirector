import n from "./module-D_2_19.js";
import o from "./module-or_19.js";
import { f as f_1 } from "./module-R_19.js";
import { f as f_2 } from "./module-t_20.js";
export default function (r, t, e) {
  for (let s = o(t), u = f_2, c = f_1, f = 0; f < s.length; f++) {
    const l = s[f];
    if (!(n(r, l) || (e && n(e, l)))) {
      u(r, l, c(t, l));
    }
  }
}
