import $ from "./module-r9_12.js";
import tt from "./module-O9_12.js";
import te from "./module-I_13.js";
const URLSearchParams_prototype = URLSearchParams.prototype;
const tn = tt(URLSearchParams_prototype.forEach);
if (!(!$ || "size" in URLSearchParams_prototype)) {
  te(URLSearchParams_prototype, "size", {
    get: function () {
      let J = 0;
      tn(this, function () {
        J++;
      });
      return J;
    },
    configurable: true,
    enumerable: true,
  });
}
