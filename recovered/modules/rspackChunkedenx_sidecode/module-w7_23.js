import n from "./module-M_2_23.js";
import o from "./module-Y_24.js";
import i from "./module-d_24.js";
import a from "./module-NK_23.js";
import s from "./module-Qn_24.js";
import c from "./module-C_24.js";
import u from "./module-lN_23.js";
import f from "./module-xsY_23.js";
const l = u("asyncIterator");
export default function (t) {
  let r;
  const e = i(t);
  let u = true;
  let h = c(e, l);
  if (!o(h)) {
    h = s(e);
    u = false;
  }
  if (h !== undefined) {
    r = n(h, e);
  } else {
    r = e;
    u = true;
  }
  i(r);
  return a(u ? r : new f(a(r)));
}
