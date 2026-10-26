import n from "./module-J.js";
import o from "./module-IF_2.js";
import i from "./module-t.js";
export default Object.setPrototypeOf ||
  ("__proto__" in {}
    ? (() => {
        let e;
        let t = false;
        const r = {};
        try {
          (e = n(Object.prototype, "__proto__", "set"))(r, []);
          t = r instanceof Array;
        } catch (e) {}
        return function (r, n) {
          o(r);
          i(n);
          if (t) {
            e(r, n);
          } else {
            r.__proto__ = n;
          }
          return r;
        };
      })()
    : undefined);
