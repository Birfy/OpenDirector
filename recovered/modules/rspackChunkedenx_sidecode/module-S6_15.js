import n from "./module-r9_15.js";
import o from "./module-I_16.js";
import i from "./module-YI_15.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  o(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return i(this);
    },
  });
}
