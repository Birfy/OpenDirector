import $ from "./module-nX_12.js";
import { f } from "./module-t_13.js";
export default function (J, Z, Q) {
  if (Q.get) {
    $(Q.get, Z, {
      getter: true,
    });
  }
  if (Q.set) {
    $(Q.set, Z, {
      setter: true,
    });
  }
  return f(J, Z, Q);
}
