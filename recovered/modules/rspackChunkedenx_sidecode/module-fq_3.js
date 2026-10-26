import o from "./module-J_4.js";
import s from "./module-W_2_3.js";
import a from "./module-Y_4.js";
import u from "./module-Za_3.js";
import c from "./module-H_2_3.js";
import f from "./module-vE_3.js";
import h from "./module-lN_3.js";
import l from "./module-N_3.js";
let n;
let i;
const v = "USE_FUNCTION_CONSTRUCTOR";
const p = h("asyncIterator");
const o_AsyncIterator = o.AsyncIterator;
const s_AsyncIteratorPrototype = s.AsyncIteratorPrototype;
if (s_AsyncIteratorPrototype) {
  n = s_AsyncIteratorPrototype;
} else if (a(o_AsyncIterator)) {
  n = o_AsyncIterator.prototype;
} else if (s[v] || o[v]) {
  try {
    i = c(c(c(Function("return async function*(){}()")())));
    if (c(i) === Object.prototype) {
      n = i;
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
if (!a(n[p])) {
  f(n, p, function () {
    return this;
  });
}
export default n;
