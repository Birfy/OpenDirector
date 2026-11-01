import n from "./module-d_10.js";
import o from "./module-jX_10.js";
export default function (t, e, r, i) {
  try {
    if (i) {
      return e(n(r)[0], r[1]);
    }
    return e(r);
  } catch (error) {
    o(t, "throw", error);
  }
}
