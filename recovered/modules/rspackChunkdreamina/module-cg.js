import n from "./module-h.js";
import o from "./module-Cj_2.js";
import { f as f_1 } from "./module-y_2.js";
import { f as f_2 } from "./module-R_2.js";
export default function (e, t, r) {
  for (let s = o(t), u = f_2, c = f_1, f = 0; f < s.length; f++) {
    const l = s[f];
    if (!(n(e, l) || (r && n(r, l)))) {
      u(e, l, c(t, l));
    }
  }
}
