import n from "./module-r9_7.js";
import o from "./module-O9_7.js";
import i from "./module-I_8.js";
const URLSearchParams_prototype = URLSearchParams.prototype;
const s = o(URLSearchParams_prototype.forEach);
if (!(!n || "size" in URLSearchParams_prototype)) {
  i(URLSearchParams_prototype, "size", {
    get: function () {
      let r = 0;
      s(this, function () {
        r++;
      });
      return r;
    },
    configurable: true,
    enumerable: true,
  });
}
