import n from "./module-h_8.js";
import o from "./module-VQ_8.js";
import i from "./module-dF_8.js";
export default function (r, t, e, s) {
  if (i) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(r, t);
    } else {
      n(r, "stack", o(e, s));
    }
  }
}
