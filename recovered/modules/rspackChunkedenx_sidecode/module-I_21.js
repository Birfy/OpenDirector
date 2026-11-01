import n from "./module-nX_20.js";
import { f } from "./module-t_21.js";
export default function (t, r, e) {
  if (e.get) {
    n(e.get, r, {
      getter: true,
    });
  }
  if (e.set) {
    n(e.set, r, {
      setter: true,
    });
  }
  return f(t, r, e);
}
