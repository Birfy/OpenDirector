import n from "./module-d_7.js";
import o from "./module-y_2_6.js";
import { f } from "./module-Qa_7.js";
export default function (t, r) {
  n(t);
  if (o(r) && r.constructor === t) {
    return r;
  }
  const e = f(t);
  e.resolve(r);
  return e.promise;
}
