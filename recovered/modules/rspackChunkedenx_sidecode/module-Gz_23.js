import n from "./module-d_24.js";
import o from "./module-jX_24.js";
export default function (t, r, e, i) {
  try {
    if (i) {
      return r(n(e)[0], e[1]);
    }
    return r(e);
  } catch (error) {
    o(t, "throw", error);
  }
}
