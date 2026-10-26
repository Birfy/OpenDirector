import n from "./module-A_17.js";
import o from "./module-aq_16.js";
import i from "./module-F4_17.js";
import a from "./module-hq_17.js";
import s from "./module-MU_16.js";
n(
  {
    target: "Array",
    proto: true,
    arity: 1,
    forced:
      require("./module-X_17.js")(function () {
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
      for (let u = 0; u < arguments_length; u++) {
        r[e] = arguments[u];
        e++;
      }
      a(r, e);
      return e;
    },
  },
);
