import $ from "./module-d_13.js";
import tt from "./module-y_2_12.js";
import { f } from "./module-Qa_13.js";
export default function (J, Z) {
  $(J);
  if (tt(Z) && Z.constructor === J) {
    return Z;
  }
  const Q = f(J);
  Q.resolve(Z);
  return Q.promise;
}
