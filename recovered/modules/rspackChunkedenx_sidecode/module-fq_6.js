import a from "./module-J_7.js";
import i from "./module-W_2_6.js";
import s from "./module-Y_7.js";
import c from "./module-Za_6.js";
import u from "./module-H_2_6.js";
import f from "./module-vE_6.js";
import l from "./module-lN_6.js";
import h from "./module-N_6.js";
let n;
let o;
const p = "USE_FUNCTION_CONSTRUCTOR";
const v = l("asyncIterator");
const a_AsyncIterator = a.AsyncIterator;
const i_AsyncIteratorPrototype = i.AsyncIteratorPrototype;
if (i_AsyncIteratorPrototype) {
  n = i_AsyncIteratorPrototype;
} else if (s(a_AsyncIterator)) {
  n = a_AsyncIterator.prototype;
} else if (i[p] || a[p]) {
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
if (!s(n[v])) {
  f(n, v, function () {
    return this;
  });
}
export default n;
