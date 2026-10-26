import n from "./module-D_2.js";
import o from "./module-or.js";
import { f as f_1 } from "./module-R.js";
import { f as f_2 } from "./module-t.js";
export default function (t, r, e) {
  for (let s = o(r), u = f_2, c = f_1, f = 0; f < s.length; f++) {
    const h = s[f];
    if (!(n(t, h) || (e && n(e, h)))) {
      u(t, h, c(r, h));
    }
  }
}
