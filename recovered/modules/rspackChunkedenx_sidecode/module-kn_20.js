import n from "./module-d_20.js";
import o from "./module-y_2_19.js";
import { f } from "./module-Qa_20.js";
export default function (r, t) {
  n(r);
  if (o(t) && t.constructor === r) {
    return t;
  }
  const e = f(r);
  e.resolve(t);
  return e.promise;
}
