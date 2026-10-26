import n from "./module-M_2_15.js";
import o from "./module-YR_15.js";
import i from "./module-C_16.js";
export default function (r, t, e, a) {
  try {
    const s = i(r, "return");
    if (s) {
      return o("Promise")
        .resolve(n(s, r))
        .then(
          () => {
            t(e);
          },
          (r) => {
            a(r);
          },
        );
    }
  } catch (error) {
    return a(error);
  }
  t(e);
}
