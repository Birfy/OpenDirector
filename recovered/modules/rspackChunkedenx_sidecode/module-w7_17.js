import n from "./module-M_2_17.js";
import o from "./module-Y_18.js";
import i from "./module-d_18.js";
import a from "./module-NK_17.js";
import s from "./module-Qn_18.js";
import u from "./module-C_18.js";
import c from "./module-lN_17.js";
import f from "./module-xsY_17.js";
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
