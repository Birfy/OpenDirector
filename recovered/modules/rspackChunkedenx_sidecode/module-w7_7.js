import n from "./module-M_2_7.js";
import o from "./module-Y_8.js";
import i from "./module-d_8.js";
import a from "./module-NK_7.js";
import s from "./module-Qn_8.js";
import u from "./module-C_8.js";
import c from "./module-lN_7.js";
import f from "./module-xsY_7.js";
const l = c("asyncIterator");
export default function (r) {
  let t;
  const e = i(r);
  let c = true;
  let h = u(e, l);
  if (!o(h)) {
    h = s(e);
    c = false;
  }
  if (h !== undefined) {
    t = n(h, e);
  } else {
    t = e;
    c = true;
  }
  i(t);
  return a(c ? t : new f(a(t)));
}
