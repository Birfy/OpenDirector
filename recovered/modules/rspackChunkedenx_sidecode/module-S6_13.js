import n from "./module-r9_13.js";
import o from "./module-I_14.js";
import i from "./module-YI_13.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  o(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return i(this);
    },
  });
}
