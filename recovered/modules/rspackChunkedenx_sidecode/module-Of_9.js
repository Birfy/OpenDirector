import n from "./module-zQ_10.js";
import o from "./module-i8_9.js";
import i from "./module-vM_10.js";
import a from "./module-R5_9.js";
export default function (t) {
  const e = n(this);
  const r = a(t);
  return (
    !(o(e) > r.size) &&
    i(
      e,
      function (t) {
        if (!r.includes(t)) {
          return false;
        }
      },
      true,
    ) !== false
  );
}
