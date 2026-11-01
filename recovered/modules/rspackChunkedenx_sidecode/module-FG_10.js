import n from "./module-YR_10.js";
import o from "./module-I_11.js";
import i from "./module-lN_10.js";
import a from "./module-r9_10.js";
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
