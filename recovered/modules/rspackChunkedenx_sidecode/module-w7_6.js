import n from "./module-M_2_6.js";
import o from "./module-Y_7.js";
import a from "./module-d_7.js";
import i from "./module-NK_6.js";
import s from "./module-Qn_7.js";
import c from "./module-C_7.js";
import u from "./module-lN_6.js";
import f from "./module-xsY_6.js";
const l = u("asyncIterator");
export default function (t) {
  let r;
  const e = a(t);
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
  a(r);
  return i(u ? r : new f(i(r)));
}
