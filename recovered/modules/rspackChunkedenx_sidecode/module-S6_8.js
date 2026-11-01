import n from "./module-r9_8.js";
import i from "./module-I_9.js";
import o from "./module-YI_8.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  i(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return o(this);
    },
  });
}
