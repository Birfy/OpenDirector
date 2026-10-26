import n from "./module-r9_5.js";
import i from "./module-I_6.js";
import o from "./module-YI_5.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  i(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return o(this);
    },
  });
}
