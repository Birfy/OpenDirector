import $ from "./module-M_2_12.js";
import tt from "./module-YR_12.js";
import te from "./module-C_13.js";
export default function (J, Z, Q, tr) {
  try {
    const tn = te(J, "return");
    if (tn) {
      return tt("Promise")
        .resolve($(tn, J))
        .then(
          () => {
            Z(Q);
          },
          (J) => {
            tr(J);
          },
        );
    }
  } catch (error) {
    return tr(error);
  }
  Z(Q);
}
