import n from "./module-M_2_14.js";
import o from "./module-Y_15.js";
import i from "./module-d_15.js";
import a from "./module-NK_14.js";
import s from "./module-Qn_15.js";
import c from "./module-C_15.js";
import u from "./module-lN_14.js";
import f from "./module-xsY_14.js";
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
