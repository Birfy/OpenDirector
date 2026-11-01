import $ from "./module-zQ_13.js";
import tt from "./module-i8_12.js";
import te from "./module-vM_13.js";
import tr from "./module-R5_12.js";
export default function (J) {
  const Z = $(this);
  const Q = tr(J);
  return (
    !(tt(Z) > Q.size) &&
    te(
      Z,
      function (J) {
        if (!Q.includes(J)) {
          return false;
        }
      },
      true,
    ) !== false
  );
}
