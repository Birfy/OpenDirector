import n from "./module-r9_18.js";
import o from "./module-I_19.js";
import i from "./module-YI_18.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  o(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return i(this);
    },
  });
}
