import n from "./module-r9_3.js";
import i from "./module-I_4.js";
import o from "./module-YI_3.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  i(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return o(this);
    },
  });
}
