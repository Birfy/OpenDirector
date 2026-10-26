import i from "./module-J.js";
import a from "./module-W_2.js";
import s from "./module-Y.js";
import u from "./module-Za.js";
import c from "./module-H_2.js";
import f from "./module-vE.js";
import h from "./module-lN.js";
import l from "./module-N.js";
let n;
let o;
const v = "USE_FUNCTION_CONSTRUCTOR";
const p = h("asyncIterator");
const i_AsyncIterator = i.AsyncIterator;
const a_AsyncIteratorPrototype = a.AsyncIteratorPrototype;
if (a_AsyncIteratorPrototype) {
  n = a_AsyncIteratorPrototype;
} else if (s(i_AsyncIterator)) {
  n = i_AsyncIterator.prototype;
} else if (a[v] || i[v]) {
  try {
    o = c(c(c(Function("return async function*(){}()")())));
    if (c(o) === Object.prototype) {
      n = o;
    }
  } catch (t) {}
}
if (n) {
  if (l) {
    n = u(n);
  }
} else {
  n = {};
}
if (!s(n[p])) {
  f(n, p, function () {
    return this;
  });
}
export default n;
