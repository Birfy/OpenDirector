import n from "./module-h_6.js";
import i from "./module-VQ_6.js";
import o from "./module-dF_6.js";
export default function (t, r, e, a) {
  if (o) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(t, r);
    } else {
      n(t, "stack", i(e, a));
    }
  }
}
