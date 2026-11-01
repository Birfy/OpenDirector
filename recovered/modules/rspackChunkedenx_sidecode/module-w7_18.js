import n from "./module-M_2_18.js";
import o from "./module-Y_19.js";
import i from "./module-d_19.js";
import a from "./module-NK_18.js";
import s from "./module-Qn_19.js";
import u from "./module-C_19.js";
import c from "./module-lN_18.js";
import f from "./module-xsY_18.js";
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
