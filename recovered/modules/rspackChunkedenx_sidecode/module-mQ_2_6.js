import n from "./module-r9_6.js";
import o from "./module-O9_6.js";
import a from "./module-I_7.js";
const URLSearchParams_prototype = URLSearchParams.prototype;
const s = o(URLSearchParams_prototype.forEach);
if (!(!n || "size" in URLSearchParams_prototype)) {
  a(URLSearchParams_prototype, "size", {
    get: function () {
      let t = 0;
      s(this, function () {
        t++;
      });
      return t;
    },
    configurable: true,
    enumerable: true,
  });
}
