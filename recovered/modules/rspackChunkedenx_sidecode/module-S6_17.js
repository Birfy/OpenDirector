import n from "./module-r9_17.js";
import o from "./module-I_18.js";
import i from "./module-YI_17.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  o(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return i(this);
    },
  });
}
