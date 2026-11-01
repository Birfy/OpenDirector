import n from "./module-r9_4.js";
import i from "./module-I_5.js";
import o from "./module-YI_4.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  i(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return o(this);
    },
  });
}
