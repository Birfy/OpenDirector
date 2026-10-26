import n from "F";
import i from "Tg";
import a from "l4J";
if (!(!n || "detached" in ArrayBuffer.prototype)) {
  i(ArrayBuffer.prototype, "detached", {
    configurable: true,
    get: function () {
      return a(this);
    },
  });
}
