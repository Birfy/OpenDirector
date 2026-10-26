import n from "./module-r9_16.js";
import o from "./module-I_17.js";
import i from "./module-YI_16.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  o(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return i(this);
    },
  });
}
