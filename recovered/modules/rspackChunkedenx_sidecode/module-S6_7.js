import n from "./module-r9_7.js";
import o from "./module-I_8.js";
import i from "./module-YI_7.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  o(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return i(this);
    },
  });
}
