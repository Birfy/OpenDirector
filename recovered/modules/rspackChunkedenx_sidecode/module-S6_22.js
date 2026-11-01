import n from "./module-r9_22.js";
import i from "./module-I_23.js";
import o from "./module-YI_22.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  i(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return o(this);
    },
  });
}
