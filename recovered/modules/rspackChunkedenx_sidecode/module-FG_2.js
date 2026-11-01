import n from "./module-YR_2.js";
import i from "./module-I_3.js";
import o from "./module-lN_2.js";
import s from "./module-r9_2.js";
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
