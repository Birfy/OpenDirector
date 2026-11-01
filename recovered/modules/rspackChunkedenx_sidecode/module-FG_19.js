import n from "./module-YR_19.js";
import o from "./module-I_20.js";
import i from "./module-lN_19.js";
import a from "./module-r9_19.js";
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
