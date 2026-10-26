import n from "./module-d_10.js";
import o from "./module-y_2_9.js";
import { f } from "./module-Qa_10.js";
export default function (t, e) {
  n(t);
  if (o(e) && e.constructor === t) {
    return e;
  }
  const r = f(t);
  r.resolve(e);
  return r.promise;
}
