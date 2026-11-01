import n from "./module-M_2_14.js";
import o from "./module-YR_14.js";
import i from "./module-C_15.js";
export default function (t, r, e, a) {
  try {
    const s = i(t, "return");
    if (s) {
      return o("Promise")
        .resolve(n(s, t))
        .then(
          () => {
            r(e);
          },
          (t) => {
            a(t);
          },
        );
    }
  } catch (error) {
    return a(error);
  }
  r(e);
}
