import n from "XJB";
import { r } from "./module-jHv.js";
export function B(e) {
  if (e) {
    for (const t of n.dv) {
      const { type } = t;
      if (r(type, e)) {
        return type;
      }
    }
  }
}
