import n from "./module-M_2_11.js";
import o from "./module-Y_12.js";
import i from "./module-d_12.js";
import a from "./module-NK_11.js";
import s from "./module-Qn_12.js";
import u from "./module-C_12.js";
import c from "./module-lN_11.js";
import f from "./module-xsY_11.js";
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
