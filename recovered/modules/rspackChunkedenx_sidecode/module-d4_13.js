import n from "./module-WH_13.js";
import o from "./module-d_14.js";
import i from "./module-SS_13.js";
export default Object.setPrototypeOf ||
  ("__proto__" in {}
    ? (() => {
        let r;
        let t = false;
        const e = {};
        try {
          (r = n(Object.prototype, "__proto__", "set"))(e, []);
          t = e instanceof Array;
        } catch (r) {}
        return function (e, n) {
          o(e);
          i(n);
          if (t) {
            r(e, n);
          } else {
            e.__proto__ = n;
          }
          return e;
        };
      })()
    : undefined);
