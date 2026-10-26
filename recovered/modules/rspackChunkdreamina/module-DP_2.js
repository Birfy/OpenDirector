import n from "./module-Y.js";
import o from "./module-Tg_2.js";
import i from "./module-Nt_3.js";
import a from "./module-F.js";
const s = i("species");
export default function (e) {
  const t = n(e);
  if (a && t && !t[s]) {
    o(t, s, {
      configurable: true,
      get: function () {
        return this;
      },
    });
  }
}
