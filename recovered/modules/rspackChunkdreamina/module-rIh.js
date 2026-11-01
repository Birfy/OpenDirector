import n from "./module-IF_2.js";
import o from "./module-tU.js";
export default function (e, t, r, i) {
  try {
    if (i) {
      return t(n(r)[0], r[1]);
    }
    return t(r);
  } catch (error) {
    o(e, "throw", error);
  }
}
