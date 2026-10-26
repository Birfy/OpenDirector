import n from "./module-YR_22.js";
import i from "./module-I_23.js";
import o from "./module-lN_22.js";
import s from "./module-r9_22.js";
const a = o("species");
export default function (t) {
  const r = n(t);
  if (s && r && !r[a]) {
    i(r, a, {
      configurable: true,
      get: function () {
        return this;
      },
    });
  }
}
