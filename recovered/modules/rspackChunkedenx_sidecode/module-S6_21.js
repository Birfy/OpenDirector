import n from "./module-r9_21.js";
import i from "./module-I_22.js";
import o from "./module-YI_21.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  i(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return o(this);
    },
  });
}
