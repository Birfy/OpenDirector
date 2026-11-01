import i from "./module-J_21.js";
import a from "./module-W_2_20.js";
import s from "./module-Y_21.js";
import c from "./module-Za_20.js";
import u from "./module-H_2_20.js";
import f from "./module-vE_20.js";
import l from "./module-lN_20.js";
import h from "./module-N_20.js";
let n;
let o;
const v = "USE_FUNCTION_CONSTRUCTOR";
const p = l("asyncIterator");
const i_AsyncIterator = i.AsyncIterator;
const a_AsyncIteratorPrototype = a.AsyncIteratorPrototype;
if (a_AsyncIteratorPrototype) {
  n = a_AsyncIteratorPrototype;
} else if (s(i_AsyncIterator)) {
  n = i_AsyncIterator.prototype;
} else if (a[v] || i[v]) {
  try {
    o = u(u(u(Function("return async function*(){}()")())));
    if (u(o) === Object.prototype) {
      n = o;
    }
  } catch (t) {}
}
if (n) {
  if (h) {
    n = c(n);
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
