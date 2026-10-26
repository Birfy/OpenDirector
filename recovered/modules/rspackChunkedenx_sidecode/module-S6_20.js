import n from "./module-r9_20.js";
import o from "./module-I_21.js";
import i from "./module-YI_20.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  o(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return i(this);
    },
  });
}
