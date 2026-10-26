import n from "./module-d_7.js";
import o from "./module-jX_7.js";
export default function (t, r, e, a) {
  try {
    if (a) {
      return r(n(e)[0], e[1]);
    }
    return r(e);
  } catch (error) {
    o(t, "throw", error);
  }
}
