import n from "./module-M_2_9.js";
import o from "./module-Y_10.js";
import i from "./module-d_10.js";
import a from "./module-NK_9.js";
import s from "./module-Qn_10.js";
import u from "./module-C_10.js";
import c from "./module-lN_9.js";
import f from "./module-xsY_9.js";
const l = c("asyncIterator");
export default function (t) {
  let e;
  const r = i(t);
  let c = true;
  let h = u(r, l);
  if (!o(h)) {
    h = s(r);
    c = false;
  }
  if (h !== undefined) {
    e = n(h, r);
  } else {
    e = r;
    c = true;
  }
  i(e);
  return a(c ? e : new f(a(e)));
}
