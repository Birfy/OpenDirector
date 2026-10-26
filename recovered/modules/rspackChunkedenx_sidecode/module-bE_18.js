import n from "./module-D_2_17.js";
import o from "./module-or_17.js";
import { f as f_1 } from "./module-R_17.js";
import { f as f_2 } from "./module-t_18.js";
export default function (r, t, e) {
  for (let s = o(t), u = f_2, c = f_1, f = 0; f < s.length; f++) {
    const h = s[f];
    if (!(n(r, h) || (e && n(e, h)))) {
      u(r, h, c(t, h));
    }
  }
}
