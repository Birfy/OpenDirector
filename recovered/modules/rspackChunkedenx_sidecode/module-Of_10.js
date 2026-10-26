import n from "./module-zQ_11.js";
import o from "./module-i8_10.js";
import i from "./module-vM_11.js";
import a from "./module-R5_10.js";
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
