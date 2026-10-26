import n from "./module-r9_11.js";
import o from "./module-I_12.js";
import i from "./module-YI_11.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  o(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return i(this);
    },
  });
}
