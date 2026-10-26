import n from "./module-YR_18.js";
import o from "./module-I_19.js";
import i from "./module-lN_18.js";
import a from "./module-r9_18.js";
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
