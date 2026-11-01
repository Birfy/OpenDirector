import n from "./module-zQ_21.js";
import o from "./module-i8_20.js";
import i from "./module-vM_21.js";
import a from "./module-R5_20.js";
export default function (t) {
  const r = n(this);
  const e = a(t);
  return (
    !(o(r) > e.size) &&
    i(
      r,
      function (t) {
        if (!e.includes(t)) {
          return false;
        }
      },
      true,
    ) !== false
  );
}
