import n from "./module-h_22.js";
import i from "./module-VQ_22.js";
import o from "./module-dF_22.js";
export default function (t, r, e, a) {
  if (o) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(t, r);
    } else {
      n(t, "stack", i(e, a));
    }
  }
}
