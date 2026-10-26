import n from "./module-M_2_2.js";
import i from "./module-YR_2.js";
import o from "./module-C_3.js";
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
