import n from "./module-r9_6.js";
import o from "./module-I_7.js";
import a from "./module-YI_6.js";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  o(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return a(this);
    },
  });
}
