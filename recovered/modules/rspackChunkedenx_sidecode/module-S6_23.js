import n from "./module-r9_23.js";
import o from "./module-I_24.js";
import i from "./module-YI_23.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  o(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return i(this);
    },
  });
}
