import n from "./module-A_8.js";
import o from "./module-aq_7.js";
import i from "./module-F4_8.js";
import a from "./module-hq_8.js";
import s from "./module-MU_7.js";
n(
  {
    target: "Array",
    proto: true,
    arity: 1,
    forced:
      require("./module-X_8.js")(function () {
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
