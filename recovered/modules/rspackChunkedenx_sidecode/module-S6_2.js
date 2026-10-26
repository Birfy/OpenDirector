import n from "./module-r9_2.js";
import i from "./module-I_3.js";
import o from "./module-YI_2.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  i(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return o(this);
    },
  });
}
