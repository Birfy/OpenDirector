import n from "./module-IF_2.js";
import o from "./module-N.js";
import { f } from "./module-W1_2.js";
export default function (e, t) {
  n(e);
  if (o(t) && t.constructor === e) {
    return t;
  }
  const r = f(e);
  r.resolve(t);
  return r.promise;
}
