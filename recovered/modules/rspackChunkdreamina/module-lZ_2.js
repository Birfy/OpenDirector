import i from "./module-u.js";
import a from "./module-dE_2.js";
import s from "./module-r.js";
import u from "./module-lY_4.js";
import c from "./module-jA_2.js";
import f from "./module-xX_2.js";
import l from "./module-Nt_3.js";
import p from "./module-K.js";
let n;
let o;
const h = "USE_FUNCTION_CONSTRUCTOR";
const v = l("asyncIterator");
const i_AsyncIterator = i.AsyncIterator;
const a_AsyncIteratorPrototype = a.AsyncIteratorPrototype;
if (a_AsyncIteratorPrototype) {
  n = a_AsyncIteratorPrototype;
} else if (s(i_AsyncIterator)) {
  n = i_AsyncIterator.prototype;
} else if (a[h] || i[h]) {
  try {
    o = c(c(c(Function("return async function*(){}()")())));
    if (c(o) === Object.prototype) {
      n = o;
    }
  } catch (e) {}
}
if (n) {
  if (p) {
    n = u(n);
  }
} else {
  n = {};
}
if (!s(n[v])) {
  f(n, v, function () {
    return this;
  });
}
export default n;
