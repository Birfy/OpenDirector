import n from "./module-YR_6.js";
import o from "./module-I_7.js";
import a from "./module-lN_6.js";
import i from "./module-r9_6.js";
const s = a("species");
export default function (t) {
  const r = n(t);
  if (i && r && !r[s]) {
    o(r, s, {
      configurable: true,
      get: function () {
        return this;
      },
    });
  }
}
