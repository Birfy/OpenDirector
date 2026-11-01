import n from "./module-zQ.js";
import o from "./module-i8.js";
import i from "./module-vM.js";
import a from "./module-R5.js";
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
