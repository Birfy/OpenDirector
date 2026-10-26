import n from "./module-WH_9.js";
import o from "./module-d_10.js";
import i from "./module-SS_9.js";
export default Object.setPrototypeOf ||
  ("__proto__" in {}
    ? (() => {
        let t;
        let e = false;
        const r = {};
        try {
          (t = n(Object.prototype, "__proto__", "set"))(r, []);
          e = r instanceof Array;
        } catch (t) {}
        return function (r, n) {
          o(r);
          i(n);
          if (e) {
            t(r, n);
          } else {
            r.__proto__ = n;
          }
          return r;
        };
      })()
    : undefined);
