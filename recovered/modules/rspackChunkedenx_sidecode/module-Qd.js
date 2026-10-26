import n from "./module-M_2.js";
import o from "./module-YR.js";
import i from "./module-C.js";
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
