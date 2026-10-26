import n from "./module-h_9.js";
import i from "./module-VQ_9.js";
import o from "./module-dF_9.js";
export default function (t, r, e, a) {
  if (o) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(t, r);
    } else {
      n(t, "stack", i(e, a));
    }
  }
}
