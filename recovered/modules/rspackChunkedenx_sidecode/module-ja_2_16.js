import n from "./module-A_17.js";
import o from "./module-aq_16.js";
import i from "./module-F4_17.js";
import a from "./module-hq_17.js";
import s from "./module-bp_16.js";
import u from "./module-MU_16.js";
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
      const e = i(r);
      const arguments_length = arguments.length;
      if (arguments_length) {
        u(e + arguments_length);
        for (let c = e; c--;) {
          const f = c + arguments_length;
          if (c in r) {
            r[f] = r[c];
          } else {
            s(r, f);
          }
        }
        for (let l = 0; l < arguments_length; l++) {
          r[l] = arguments[l];
        }
      }
      return a(r, e + arguments_length);
    },
  },
);
