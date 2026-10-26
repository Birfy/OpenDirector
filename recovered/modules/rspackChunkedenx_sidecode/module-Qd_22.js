import n from "./module-M_2_21.js";
import i from "./module-YR_21.js";
import o from "./module-C_22.js";
export default function (t, r, e, s) {
  try {
    const a = o(t, "return");
    if (a) {
      return i("Promise")
        .resolve(n(a, t))
        .then(
          () => {
            r(e);
          },
          (t) => {
            s(t);
          },
        );
    }
  } catch (error) {
    return s(error);
  }
  r(e);
}
