import n from "./module-h_7.js";
import o from "./module-VQ_7.js";
import a from "./module-dF_7.js";
export default function (t, r, e, s) {
  if (a) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(t, r);
    } else {
      n(t, "stack", o(e, s));
    }
  }
}
