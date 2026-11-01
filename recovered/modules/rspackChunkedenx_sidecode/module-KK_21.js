import n from "./module-A_22.js";
import i from "./module-aq_21.js";
import o from "./module-F4_22.js";
import s from "./module-hq_22.js";
import a from "./module-MU_21.js";
n(
  {
    target: "Array",
    proto: true,
    arity: 1,
    forced:
      require("./module-X_22.js")(function () {
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
      const r = i(this);
      let e = o(r);
      const arguments_length = arguments.length;
      a(e + arguments_length);
      for (let u = 0; u < arguments_length; u++) {
        r[e] = arguments[u];
        e++;
      }
      s(r, e);
      return e;
    },
  },
);
