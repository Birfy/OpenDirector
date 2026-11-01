import n from "./module-M_2_16.js";
import o from "./module-Y_17.js";
import i from "./module-d_17.js";
import a from "./module-NK_16.js";
import s from "./module-Qn_17.js";
import u from "./module-C_17.js";
import c from "./module-lN_16.js";
import f from "./module-xsY_16.js";
const l = c("asyncIterator");
export default function (t) {
  let r;
  const e = i(t);
  let c = true;
  let h = u(e, l);
  if (!o(h)) {
    h = s(e);
    c = false;
  }
  if (h !== undefined) {
    r = n(h, e);
  } else {
    r = e;
    c = true;
  }
  i(r);
  return a(c ? r : new f(a(r)));
}
