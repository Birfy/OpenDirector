import n from "./module-zQ_3.js";
import i from "./module-i8_2.js";
import o from "./module-vM_3.js";
import s from "./module-R5_2.js";
export default function (t) {
  const r = n(this);
  const e = s(t);
  return (
    !(i(r) > e.size) &&
    o(
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
