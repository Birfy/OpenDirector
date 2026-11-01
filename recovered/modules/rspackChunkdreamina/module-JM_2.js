import n from "./module-z3.js";
import o from "./module-pv.js";
import i from "./module-ee.js";
export default function (e, t, r, s) {
  if (i) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(e, t);
    } else {
      n(e, "stack", o(r, s));
    }
  }
}
