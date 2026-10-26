import n from "./module-fM_3.js";
import o from "./module-o.js";
import i from "./module-x.js";
import a from "./module-O_2.js";
import s from "./module-c_2.js";
import u from "./module-OG_2.js";
import c from "./module-lY_4.js";
import f from "./module-z1_2.js";
const p = o([].push);
export default function (e, t, r, o) {
  let h;
  let v;
  let d;
  const g = a(e);
  const y = i(g);
  const m = n(t, r);
  const x = c(null);
  for (let b = u(y), w = 0; b > w; w++) {
    if ((v = s(m((d = y[w]), w, g))) in x) {
      p(x[v], d);
    } else {
      x[v] = [d];
    }
  }
  if (o && (h = o(g)) !== Array) {
    for (v in x) {
      x[v] = f(h, x[v]);
    }
  }
  return x;
}
