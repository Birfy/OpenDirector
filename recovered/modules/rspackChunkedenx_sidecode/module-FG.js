import n from "./module-YR.js";
import o from "./module-I.js";
import i from "./module-lN.js";
import a from "./module-r9.js";
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
