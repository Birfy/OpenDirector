import n from "./module-A_10.js";
import o from "./module-aq_9.js";
import i from "./module-F4_10.js";
import a from "./module-hq_10.js";
import s from "./module-bp_9.js";
import u from "./module-MU_9.js";
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
      const e = o(this);
      const r = i(e);
      const arguments_length = arguments.length;
      if (arguments_length) {
        u(r + arguments_length);
        for (let c = r; c--;) {
          const f = c + arguments_length;
          if (c in e) {
            e[f] = e[c];
          } else {
            s(e, f);
          }
        }
        for (let l = 0; l < arguments_length; l++) {
          e[l] = arguments[l];
        }
      }
      return a(e, r + arguments_length);
    },
  },
);
