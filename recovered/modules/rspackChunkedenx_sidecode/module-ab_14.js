import n from "./module-r9_14.js";
import o from "./module-X_15.js";
import i from "./module-d_15.js";
import a from "./module-Za_14.js";
import s from "./module-Yw_14.js";
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
      const r = s(t.name, "Error");
      const e = s(t.message);
      if (r) {
        if (e) {
          return r + ": " + e;
        }
        return r;
      }
      return e;
    }
  : toString;
