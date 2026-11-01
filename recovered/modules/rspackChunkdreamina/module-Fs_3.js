import n from "./module-V2_2.js";
import o from "./module-LE_2.js";
import i from "./module-Ip_2.js";
import a from "./module-Gb_3.js";
export default function (e) {
  const t = n(this);
  const r = a(e);
  return (
    !(o(t) > r.size) &&
    i(
      t,
      function (e) {
        if (!r.includes(e)) {
          return false;
        }
      },
      true,
    ) !== false
  );
}
