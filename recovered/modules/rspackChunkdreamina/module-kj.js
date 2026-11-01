import n from "./module-p3.js";
import o from "./module-r.js";
import i from "./module-IF_2.js";
import a from "./module-ju_2.js";
import s from "./module-UZ_3.js";
import u from "./module-T_2.js";
import c from "./module-Nt_3.js";
import f from "./module-zs_2.js";
const l = c("asyncIterator");
export default function (e) {
  let t;
  const r = i(e);
  let c = true;
  let p = u(r, l);
  if (!o(p)) {
    p = s(r);
    c = false;
  }
  if (p !== undefined) {
    t = n(p, r);
  } else {
    t = r;
    c = true;
  }
  i(t);
  return a(c ? t : new f(a(t)));
}
