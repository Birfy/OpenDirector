import n from "./module-r9_9.js";
import o from "./module-X_10.js";
import i from "./module-d_10.js";
import a from "./module-Za_9.js";
import s from "./module-Yw_9.js";
const toString = Error.prototype.toString;
export default o(function () {
  if (n) {
    var t = a(
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
      const t = i(this);
      const e = s(t.name, "Error");
      const r = s(t.message);
      if (e) {
        if (r) {
          return e + ": " + r;
        }
        return e;
      }
      return r;
    }
  : toString;
