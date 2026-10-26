import n from "./module-h_4.js";
import i from "./module-VQ_4.js";
import o from "./module-dF_4.js";
export default function (t, r, e, a) {
  if (o) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(t, r);
    } else {
      n(t, "stack", i(e, a));
    }
  }
}
