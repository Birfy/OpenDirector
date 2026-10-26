import n from "./module-d_4.js";
import i from "./module-jX_4.js";
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
