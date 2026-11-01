import $ from "./module-r9_12.js";
import tt from "./module-I_13.js";
import te from "./module-YI_12.js";
if (!(!$ || "detached" in ArrayBuffer.prototype)) {
  tt(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return te(this);
    },
  });
}
