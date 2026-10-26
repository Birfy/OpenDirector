import n from "./module-YR_23.js";
import o from "./module-I_24.js";
import i from "./module-lN_23.js";
import a from "./module-r9_23.js";
const s = i("species");
export default function (t) {
  const r = n(t);
  if (a && r && !r[s]) {
    o(r, s, {
      configurable: true,
      get: function () {
        return this;
      },
    });
  }
}
