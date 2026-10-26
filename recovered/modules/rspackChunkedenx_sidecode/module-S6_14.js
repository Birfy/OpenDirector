import n from "./module-r9_14.js";
import o from "./module-I_15.js";
import i from "./module-YI_14.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  o(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return i(this);
    },
  });
}
