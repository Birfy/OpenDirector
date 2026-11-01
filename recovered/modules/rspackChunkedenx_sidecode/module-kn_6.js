import n from "./module-d_6.js";
import i from "./module-y_2_5.js";
import { f } from "./module-Qa_6.js";
export default function (t, r) {
  n(t);
  if (i(r) && r.constructor === t) {
    return r;
  }
  const e = f(t);
  e.resolve(r);
  return e.promise;
}
