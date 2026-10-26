import n from "./module-r9_9.js";
import o from "./module-I_10.js";
import i from "./module-YI_9.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  o(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return i(this);
    },
  });
}
