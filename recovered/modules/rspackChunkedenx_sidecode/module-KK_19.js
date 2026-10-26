import n from "./module-A_20.js";
import o from "./module-aq_19.js";
import i from "./module-F4_20.js";
import a from "./module-hq_20.js";
import s from "./module-MU_19.js";
n(
  {
    target: "Array",
    proto: true,
    arity: 1,
    forced:
      require("./module-X_20.js")(function () {
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
    push: function (r) {
      const t = o(this);
      let e = i(t);
      const arguments_length = arguments.length;
      s(e + arguments_length);
      for (let u = 0; u < arguments_length; u++) {
        t[e] = arguments[u];
        e++;
      }
      a(t, e);
      return e;
    },
  },
);
