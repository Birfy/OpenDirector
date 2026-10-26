import n from "./module-F.js";
import o from "./module-VV_4.js";
import i from "./module-IF_2.js";
import a from "./module-lY_4.js";
import s from "./module-Gq_3.js";
const toString = Error.prototype.toString;
export default o(function () {
  if (n) {
    var e = a(
      Object.defineProperty({}, "name", {
        get: function () {
          return this === e;
        },
      }),
    );
    if (toString.call(e) !== "true") {
      return true;
    }
  }
  return (
    toString.call({
      message: 1,
      name: 2,
    }) !== "2: 1" || toString.call({}) !== "Error"
  );
})
  ? function () {
      const e = i(this);
      const t = s(e.name, "Error");
      const r = s(e.message);
      if (t) {
        if (r) {
          return t + ": " + r;
        }
        return t;
      }
      return r;
    }
  : toString;
