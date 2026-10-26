import n from "./module-r9_19.js";
import o from "./module-I_20.js";
import i from "./module-YI_19.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  o(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return i(this);
    },
  });
}
