import n from "./module-zQ_16.js";
import o from "./module-i8_15.js";
import i from "./module-vM_16.js";
import a from "./module-R5_15.js";
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
