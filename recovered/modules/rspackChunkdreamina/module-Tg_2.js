import n from "./module-q_2.js";
import { f } from "./module-R_2.js";
export default function (e, t, r) {
  if (r.get) {
    n(r.get, t, {
      getter: true,
    });
  }
  if (r.set) {
    n(r.set, t, {
      setter: true,
    });
  }
  return f(e, t, r);
}
