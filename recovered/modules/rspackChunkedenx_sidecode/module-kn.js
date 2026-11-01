import n from "./module-d.js";
import o from "./module-y_2.js";
import { f } from "./module-Qa.js";
export default function (t, r) {
  n(t);
  if (o(r) && r.constructor === t) {
    return r;
  }
  const e = f(t);
  e.resolve(r);
  return e.promise;
}
