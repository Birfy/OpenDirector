import n from "./module-r9_2.js";
import i from "./module-O9_2.js";
import o from "./module-I_3.js";
const URLSearchParams_prototype = URLSearchParams.prototype;
const a = i(URLSearchParams_prototype.forEach);
if (!(!n || "size" in URLSearchParams_prototype)) {
  o(URLSearchParams_prototype, "size", {
    get: function () {
      let t = 0;
      a(this, function () {
        t++;
      });
      return t;
    },
    configurable: true,
    enumerable: true,
  });
}
