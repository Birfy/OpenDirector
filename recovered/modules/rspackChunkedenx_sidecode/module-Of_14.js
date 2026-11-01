import n from "./module-zQ_15.js";
import o from "./module-i8_14.js";
import i from "./module-vM_15.js";
import a from "./module-R5_14.js";
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
