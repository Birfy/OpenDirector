import n from "./module-YR_9.js";
import o from "./module-I_10.js";
import i from "./module-lN_9.js";
import a from "./module-r9_9.js";
const s = i("species");
export default function (t) {
  const e = n(t);
  if (a && e && !e[s]) {
    o(e, s, {
      configurable: true,
      get: function () {
        return this;
      },
    });
  }
}
