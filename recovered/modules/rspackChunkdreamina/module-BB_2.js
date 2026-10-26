import n from "./module-g.js";
import o from "./module-O_2.js";
import i from "./module-OG_2.js";
import a from "./module-x2_3.js";
import s from "./module-Xc_3.js";
import u from "./module-Bw_2.js";
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
    unshift: function (e) {
      const t = o(this);
      const r = i(t);
      const arguments_length = arguments.length;
      if (arguments_length) {
        u(r + arguments_length);
        for (let c = r; c--;) {
          const f = c + arguments_length;
          if (c in t) {
            t[f] = t[c];
          } else {
            s(t, f);
          }
        }
        for (let l = 0; l < arguments_length; l++) {
          t[l] = arguments[l];
        }
      }
      return a(t, r + arguments_length);
    },
  },
);
