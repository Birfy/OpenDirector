import { A } from "./module-GV.js";
import n from "dr";
function i(t, e) {
  if (e && (A(e) == "object" || typeof e === "function")) {
    return e;
  }
  if (e !== undefined) {
    throw TypeError("Derived constructors may only return object or undefined");
  }
  return n.A(t);
}
export { i as A };
