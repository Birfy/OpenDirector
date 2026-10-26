import n from "./module-nX_9.js";
import { f } from "./module-t_10.js";
export default function (t, e, r) {
  if (r.get) {
    n(r.get, e, {
      getter: true,
    });
  }
  if (r.set) {
    n(r.set, e, {
      setter: true,
    });
  }
  return f(t, e, r);
}
