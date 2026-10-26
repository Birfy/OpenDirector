import n from "./module-A_19.js";
import o from "./module-aq_18.js";
import i from "./module-F4_19.js";
import a from "./module-hq_19.js";
import s from "./module-bp_18.js";
import u from "./module-MU_18.js";
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
    unshift: function (r) {
      const t = o(this);
      const e = i(t);
      const arguments_length = arguments.length;
      if (arguments_length) {
        u(e + arguments_length);
        for (let c = e; c--;) {
          const f = c + arguments_length;
          if (c in t) {
            t[f] = t[c];
          } else {
            s(t, f);
          }
        }
        for (let h = 0; h < arguments_length; h++) {
          t[h] = arguments[h];
        }
      }
      return a(t, e + arguments_length);
    },
  },
);
