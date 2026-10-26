import n from "./module-M_2_20.js";
import o from "./module-Y_21.js";
import i from "./module-d_21.js";
import a from "./module-NK_20.js";
import s from "./module-Qn_21.js";
import c from "./module-C_21.js";
import u from "./module-lN_20.js";
import f from "./module-xsY_20.js";
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
