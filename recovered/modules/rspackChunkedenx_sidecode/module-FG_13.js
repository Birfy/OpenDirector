import n from "./module-YR_13.js";
import o from "./module-I_14.js";
import i from "./module-lN_13.js";
import a from "./module-r9_13.js";
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
