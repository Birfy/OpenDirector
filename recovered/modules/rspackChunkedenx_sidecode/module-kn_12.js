import n from "./module-d_12.js";
import o from "./module-y_2_11.js";
import { f } from "./module-Qa_12.js";
export default function (r, t) {
  n(r);
  if (o(t) && t.constructor === r) {
    return t;
  }
  const e = f(r);
  e.resolve(t);
  return e.promise;
}
