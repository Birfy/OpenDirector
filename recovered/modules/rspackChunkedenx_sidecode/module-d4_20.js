import n from "./module-WH_20.js";
import o from "./module-d_21.js";
import i from "./module-SS_20.js";
export default Object.setPrototypeOf ||
  ("__proto__" in {}
    ? (() => {
        let t;
        let r = false;
        const e = {};
        try {
          (t = n(Object.prototype, "__proto__", "set"))(e, []);
          r = e instanceof Array;
        } catch (t) {}
        return function (e, n) {
          o(e);
          i(n);
          if (r) {
            t(e, n);
          } else {
            e.__proto__ = n;
          }
          return e;
        };
      })()
    : undefined);
