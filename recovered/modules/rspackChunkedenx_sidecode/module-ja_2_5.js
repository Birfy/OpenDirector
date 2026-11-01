import n from "./module-A_6.js";
import i from "./module-aq_5.js";
import o from "./module-F4_6.js";
import s from "./module-hq_6.js";
import a from "./module-bp_5.js";
import u from "./module-MU_5.js";
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
      const r = i(this);
      const e = o(r);
      const arguments_length = arguments.length;
      if (arguments_length) {
        u(e + arguments_length);
        for (let c = e; c--;) {
          const f = c + arguments_length;
          if (c in r) {
            r[f] = r[c];
          } else {
            a(r, f);
          }
        }
        for (let h = 0; h < arguments_length; h++) {
          r[h] = arguments[h];
        }
      }
      return s(r, e + arguments_length);
    },
  },
);
