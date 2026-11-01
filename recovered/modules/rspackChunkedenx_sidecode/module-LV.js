import n from "./module-h.js";
import o from "./module-VQ.js";
import i from "./module-dF.js";
export default function (t, r, e, s) {
  if (i) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(t, r);
    } else {
      n(t, "stack", o(e, s));
    }
  }
}
