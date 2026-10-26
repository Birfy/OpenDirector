import n from "./module-M_2_9.js";
import o from "./module-YR_9.js";
import i from "./module-C_10.js";
export default function (t, e, r, a) {
  try {
    const s = i(t, "return");
    if (s) {
      return o("Promise")
        .resolve(n(s, t))
        .then(
          () => {
            e(r);
          },
          (t) => {
            a(t);
          },
        );
    }
  } catch (error) {
    return a(error);
  }
  e(r);
}
