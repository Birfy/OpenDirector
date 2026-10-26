import n from "./module-d_20.js";
import o from "./module-jX_20.js";
export default function (r, t, e, i) {
  try {
    if (i) {
      return t(n(e)[0], e[1]);
    }
    return t(e);
  } catch (error) {
    o(r, "throw", error);
  }
}
