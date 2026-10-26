import n from "./module-r9_14.js";
import o from "./module-O9_14.js";
import i from "./module-I_15.js";
const URLSearchParams_prototype = URLSearchParams.prototype;
const s = o(URLSearchParams_prototype.forEach);
if (!(!n || "size" in URLSearchParams_prototype)) {
  i(URLSearchParams_prototype, "size", {
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
