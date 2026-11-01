import n from "./module-d_3.js";
import i from "./module-y_2_2.js";
import { f } from "./module-Qa_3.js";
export default function (t, r) {
  n(t);
  if (i(r) && r.constructor === t) {
    return r;
  }
  const e = f(t);
  e.resolve(r);
  return e.promise;
}
