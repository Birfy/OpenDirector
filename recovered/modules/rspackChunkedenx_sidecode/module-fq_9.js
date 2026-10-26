import i from "./module-J_10.js";
import a from "./module-W_2_9.js";
import s from "./module-Y_10.js";
import u from "./module-Za_9.js";
import c from "./module-H_2_9.js";
import f from "./module-vE_9.js";
import l from "./module-lN_9.js";
import h from "./module-N_9.js";
let n;
let o;
const v = "USE_FUNCTION_CONSTRUCTOR";
const d = l("asyncIterator");
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
  if (h) {
    n = u(n);
  }
} else {
  n = {};
}
if (!s(n[d])) {
  f(n, d, function () {
    return this;
  });
}
export default n;
