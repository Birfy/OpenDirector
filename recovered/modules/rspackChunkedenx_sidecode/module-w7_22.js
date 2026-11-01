import n from "./module-M_2_22.js";
import i from "./module-Y_23.js";
import o from "./module-d_23.js";
import s from "./module-NK_22.js";
import a from "./module-Qn_23.js";
import u from "./module-C_23.js";
import c from "./module-lN_22.js";
import f from "./module-xsY_22.js";
const h = c("asyncIterator");
export default function (t) {
  let r;
  const e = o(t);
  let c = true;
  let l = u(e, h);
  if (!i(l)) {
    l = a(e);
    c = false;
  }
  if (l !== undefined) {
    r = n(l, e);
  } else {
    r = e;
    c = true;
  }
  o(r);
  return s(c ? r : new f(s(r)));
}
