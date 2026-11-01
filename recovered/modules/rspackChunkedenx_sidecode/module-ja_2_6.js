import n from "./module-A_7.js";
import o from "./module-aq_6.js";
import a from "./module-F4_7.js";
import i from "./module-hq_7.js";
import s from "./module-bp_6.js";
import c from "./module-MU_6.js";
n(
  {
    target: "Array",
    proto: true,
    arity: 1,
    forced:
      [].unshift(0) !== 1 ||
      !(() => {
        try {
          Object.defineProperty([], "length", {
            writable: false,
          }).unshift();
        } catch (error) {
          return error instanceof TypeError;
        }
      })(),
  },
  {
    unshift: function (t) {
      const r = o(this);
      const e = a(r);
      const arguments_length = arguments.length;
      if (arguments_length) {
        c(e + arguments_length);
        for (let u = e; u--;) {
          const f = u + arguments_length;
          if (u in r) {
            r[f] = r[u];
          } else {
            s(r, f);
          }
        }
        for (let l = 0; l < arguments_length; l++) {
          r[l] = arguments[l];
        }
      }
      return i(r, e + arguments_length);
    },
  },
);
