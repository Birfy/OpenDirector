import n from "./module-WH_2.js";
import i from "./module-d_3.js";
import o from "./module-SS_2.js";
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
          i(e);
          o(n);
          if (r) {
            t(e, n);
          } else {
            e.__proto__ = n;
          }
          return e;
        };
      })()
    : undefined);
