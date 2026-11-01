import n from "./module-zQ_7.js";
import o from "./module-i8_6.js";
import a from "./module-vM_7.js";
import i from "./module-R5_6.js";
export default function (t) {
  const r = n(this);
  const e = i(t);
  return (
    !(o(r) > e.size) &&
    a(
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
