import n from "./module-zQ_12.js";
import o from "./module-i8_11.js";
import i from "./module-vM_12.js";
import a from "./module-R5_11.js";
export default function (r) {
  const t = n(this);
  const e = a(r);
  return (
    !(o(t) > e.size) &&
    i(
      t,
      function (r) {
        if (!e.includes(r)) {
          return false;
        }
      },
      true,
    ) !== false
  );
}
