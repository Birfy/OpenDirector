import n from "./module-YR_7.js";
import o from "./module-I_8.js";
import i from "./module-lN_7.js";
import a from "./module-r9_7.js";
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
