import n from "./module-h_15.js";
import o from "./module-VQ_15.js";
import i from "./module-dF_15.js";
export default function (t, r, e, s) {
  if (i) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(t, r);
    } else {
      n(t, "stack", o(e, s));
    }
  }
}
