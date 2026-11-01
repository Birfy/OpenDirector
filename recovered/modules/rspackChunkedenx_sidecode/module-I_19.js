import n from "./module-nX_18.js";
import { f } from "./module-t_19.js";
export default function (r, t, e) {
  if (e.get) {
    n(e.get, t, {
      getter: true,
    });
  }
  if (e.set) {
    n(e.set, t, {
      setter: true,
    });
  }
  return f(r, t, e);
}
