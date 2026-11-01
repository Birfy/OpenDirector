import n from "./module-A_24.js";
import o from "./module-aq_23.js";
import i from "./module-F4_24.js";
import a from "./module-hq_24.js";
import s from "./module-MU_23.js";
n(
  {
    target: "Array",
    proto: true,
    arity: 1,
    forced:
      require("./module-X_24.js")(function () {
        return (
          [].push.call(
            {
              length: 4294967296,
            },
            1,
          ) !== 4294967297
        );
      }) ||
      !(() => {
        try {
          Object.defineProperty([], "length", {
            writable: false,
          }).push();
        } catch (error) {
          return error instanceof TypeError;
        }
      })(),
  },
  {
    push: function (t) {
      const r = o(this);
      let e = i(r);
      const arguments_length = arguments.length;
      s(e + arguments_length);
      for (let c = 0; c < arguments_length; c++) {
        r[e] = arguments[c];
        e++;
      }
      a(r, e);
      return e;
    },
  },
);
