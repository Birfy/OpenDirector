import n from "./module-r9_10.js";
import o from "./module-I_11.js";
import i from "./module-YI_10.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  o(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return i(this);
    },
  });
}
