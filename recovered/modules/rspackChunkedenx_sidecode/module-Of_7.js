import n from "./module-zQ_8.js";
import o from "./module-i8_7.js";
import i from "./module-vM_8.js";
import a from "./module-R5_7.js";
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
