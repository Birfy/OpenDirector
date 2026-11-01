import n from "F";
import i from "o";
import a from "Tg";
const URLSearchParams_prototype = URLSearchParams.prototype;
const s = i(URLSearchParams_prototype.forEach);
if (!(!n || "size" in URLSearchParams_prototype)) {
  a(URLSearchParams_prototype, "size", {
    get: function () {
      let t = 0;
      s(this, function () {
        t++;
      });
      return t;
    },
    configurable: true,
    enumerable: true,
  });
}
