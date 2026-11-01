import n from "./module-h_19.js";
import o from "./module-VQ_19.js";
import i from "./module-dF_19.js";
export default function (r, t, e, s) {
  if (i) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(r, t);
    } else {
      n(r, "stack", o(e, s));
    }
  }
}
