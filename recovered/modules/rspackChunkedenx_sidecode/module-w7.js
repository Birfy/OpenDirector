import n from "./module-M_2.js";
import o from "./module-Y.js";
import i from "./module-d.js";
import a from "./module-NK.js";
import s from "./module-Qn.js";
import u from "./module-C.js";
import c from "./module-lN.js";
import f from "./module-xsY.js";
const h = c("asyncIterator");
export default function (t) {
  let r;
  const e = i(t);
  let c = true;
  let l = u(e, h);
  if (!o(l)) {
    l = s(e);
    c = false;
  }
  if (l !== undefined) {
    r = n(l, e);
  } else {
    r = e;
    c = true;
  }
  i(r);
  return a(c ? r : new f(a(r)));
}
