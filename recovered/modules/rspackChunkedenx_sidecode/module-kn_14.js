import n from "./module-d_14.js";
import o from "./module-y_2_13.js";
import { f } from "./module-Qa_14.js";
export default function (r, t) {
  n(r);
  if (o(t) && t.constructor === r) {
    return t;
  }
  const e = f(r);
  e.resolve(t);
  return e.promise;
}
