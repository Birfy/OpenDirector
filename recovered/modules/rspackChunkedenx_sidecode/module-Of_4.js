import n from "./module-zQ_5.js";
import i from "./module-i8_4.js";
import o from "./module-vM_5.js";
import s from "./module-R5_4.js";
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
