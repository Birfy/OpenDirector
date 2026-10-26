import n from "./module-p3.js";
import o from "./module-Y.js";
import i from "./module-T_2.js";
export default function (e, t, r, a) {
  try {
    const s = i(e, "return");
    if (s) {
      return o("Promise")
        .resolve(n(s, e))
        .then(
          () => {
            t(r);
          },
          (e) => {
            a(e);
          },
        );
    }
  } catch (error) {
    return a(error);
  }
  t(r);
}
