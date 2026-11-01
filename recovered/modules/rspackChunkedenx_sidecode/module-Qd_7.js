import n from "./module-M_2_6.js";
import o from "./module-YR_6.js";
import a from "./module-C_7.js";
export default function (t, r, e, i) {
  try {
    const s = a(t, "return");
    if (s) {
      return o("Promise")
        .resolve(n(s, t))
        .then(
          () => {
            r(e);
          },
          (t) => {
            i(t);
          },
        );
    }
  } catch (error) {
    return i(error);
  }
  r(e);
}
