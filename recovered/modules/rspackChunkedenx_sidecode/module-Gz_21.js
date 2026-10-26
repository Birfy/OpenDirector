import n from "./module-d_22.js";
import i from "./module-jX_22.js";
export default function (t, r, e, o) {
  try {
    if (o) {
      return r(n(e)[0], e[1]);
    }
    return r(e);
  } catch (error) {
    i(t, "throw", error);
  }
}
