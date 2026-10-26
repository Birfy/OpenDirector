import n from "./module-d_24.js";
import o from "./module-y_2_23.js";
import { f } from "./module-Qa_24.js";
export default function (t, r) {
  n(t);
  if (o(r) && r.constructor === t) {
    return r;
  }
  const e = f(t);
  e.resolve(r);
  return e.promise;
}
