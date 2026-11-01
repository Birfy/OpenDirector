import n from "./module-M_2_13.js";
import o from "./module-Y_14.js";
import i from "./module-d_14.js";
import a from "./module-NK_13.js";
import s from "./module-Qn_14.js";
import u from "./module-C_14.js";
import c from "./module-lN_13.js";
import f from "./module-xsY_13.js";
const h = c("asyncIterator");
export default function (r) {
  let t;
  const e = i(r);
  let c = true;
  let l = u(e, h);
  if (!o(l)) {
    l = s(e);
    c = false;
  }
  if (l !== undefined) {
    t = n(l, e);
  } else {
    t = e;
    c = true;
  }
  i(t);
  return a(c ? t : new f(a(t)));
}
