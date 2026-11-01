import n from "./module-r9_8.js";
import i from "./module-X_9.js";
import o from "./module-d_9.js";
import s from "./module-Za_8.js";
import a from "./module-Yw_8.js";
const toString = Error.prototype.toString;
export default i(function () {
  if (n) {
    var t = s(
      Object.defineProperty({}, "name", {
        get: function () {
          return this === t;
        },
      }),
    );
    if (toString.call(t) !== "true") {
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
      const t = o(this);
      const r = a(t.name, "Error");
      const e = a(t.message);
      if (r) {
        if (e) {
          return r + ": " + e;
        }
        return r;
      }
      return e;
    }
  : toString;
