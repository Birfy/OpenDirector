import n from "./module-A_10.js";
import o from "./module-aq_9.js";
import i from "./module-F4_10.js";
import a from "./module-hq_10.js";
import s from "./module-MU_9.js";
n(
  {
    target: "Array",
    proto: true,
    arity: 1,
    forced:
      require("./module-X_10.js")(function () {
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
      const e = o(this);
      let r = i(e);
      const arguments_length = arguments.length;
      s(r + arguments_length);
      for (let u = 0; u < arguments_length; u++) {
        e[r] = arguments[u];
        r++;
      }
      a(e, r);
      return r;
    },
  },
);
