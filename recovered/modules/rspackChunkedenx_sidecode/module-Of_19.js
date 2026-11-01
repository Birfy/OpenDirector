import n from "./module-zQ_20.js";
import o from "./module-i8_19.js";
import i from "./module-vM_20.js";
import a from "./module-R5_19.js";
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
