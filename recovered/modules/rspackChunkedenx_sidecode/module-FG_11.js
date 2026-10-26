import n from "./module-YR_11.js";
import o from "./module-I_12.js";
import i from "./module-lN_11.js";
import a from "./module-r9_11.js";
const s = i("species");
export default function (r) {
  const t = n(r);
  if (a && t && !t[s]) {
    o(t, s, {
      configurable: true,
      get: function () {
        return this;
      },
    });
  }
}
