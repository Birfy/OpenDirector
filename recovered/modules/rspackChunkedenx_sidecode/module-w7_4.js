import n from "./module-M_2_4.js";
import i from "./module-Y_5.js";
import o from "./module-d_5.js";
import s from "./module-NK_4.js";
import a from "./module-Qn_5.js";
import u from "./module-C_5.js";
import c from "./module-lN_4.js";
import f from "./module-xsY_4.js";
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
