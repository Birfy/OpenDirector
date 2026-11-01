import n from "./module-d_9.js";
import i from "./module-y_2_8.js";
import { f } from "./module-Qa_9.js";
export default function (t, r) {
  n(t);
  if (i(r) && r.constructor === t) {
    return r;
  }
  const e = f(t);
  e.resolve(r);
  return e.promise;
}
