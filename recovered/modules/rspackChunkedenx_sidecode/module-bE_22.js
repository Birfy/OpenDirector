import n from "./module-D_2_21.js";
import i from "./module-or_21.js";
import { f as f_1 } from "./module-R_21.js";
import { f as f_2 } from "./module-t_22.js";
export default function (t, r, e) {
  for (let a = i(r), u = f_2, c = f_1, f = 0; f < a.length; f++) {
    const h = a[f];
    if (!(n(t, h) || (e && n(e, h)))) {
      u(t, h, c(r, h));
    }
  }
}
