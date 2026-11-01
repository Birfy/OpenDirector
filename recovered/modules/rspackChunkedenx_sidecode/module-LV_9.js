import n from "./module-h_10.js";
import o from "./module-VQ_10.js";
import i from "./module-dF_10.js";
export default function (t, e, r, s) {
  if (i) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(t, e);
    } else {
      n(t, "stack", o(r, s));
    }
  }
}
