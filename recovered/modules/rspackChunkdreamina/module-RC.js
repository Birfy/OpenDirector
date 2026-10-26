import n from "./module-N.js";
import o from "./module-z3.js";
export default function (e, t) {
  if (n(t) && "cause" in t) {
    o(e, "cause", t.cause);
  }
}
