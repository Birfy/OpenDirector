import n from "./module-r9_7.js";
import o from "./module-X_8.js";
import i from "./module-d_8.js";
import a from "./module-Za_7.js";
import s from "./module-Yw_7.js";
const toString = Error.prototype.toString;
export default o(function () {
  if (n) {
    var r = a(
      Object.defineProperty({}, "name", {
        get: function () {
          return this === r;
        },
      }),
    );
    if (toString.call(r) !== "true") {
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
      const r = i(this);
      const t = s(r.name, "Error");
      const e = s(r.message);
      if (t) {
        if (e) {
          return t + ": " + e;
        }
        return t;
      }
      return e;
    }
  : toString;
