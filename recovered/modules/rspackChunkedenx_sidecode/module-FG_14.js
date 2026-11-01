import n from "./module-YR_14.js";
import o from "./module-I_15.js";
import i from "./module-lN_14.js";
import a from "./module-r9_14.js";
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
