import o from "./module-yK.js";
import n from "./module-Tst.js";
export default function (t, e) {
  if (e && (o(e) == "object" || typeof e === "function")) {
    return e;
  }
  if (e !== undefined) {
    throw TypeError("Derived constructors may only return object or undefined");
  }
  return n(t);
}
