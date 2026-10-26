import n from "./module-A.js";
import o from "./module-aq.js";
import i from "./module-F4.js";
import a from "./module-hq.js";
import s from "./module-bp.js";
import u from "./module-MU.js";
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
        for (let h = 0; h < arguments_length; h++) {
          r[h] = arguments[h];
        }
      }
      return a(r, e + arguments_length);
    },
  },
);
