import n from "./module-g.js";
import o from "./module-O_2.js";
import i from "./module-OG_2.js";
import a from "./module-x2_3.js";
import s from "./module-Bw_2.js";
n(
  {
    target: "Array",
    proto: true,
    arity: 1,
    forced:
      require("./module-VV_4.js")(function () {
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
    push: function (e) {
      const t = o(this);
      let r = i(t);
      const arguments_length = arguments.length;
      s(r + arguments_length);
      for (let u = 0; u < arguments_length; u++) {
        t[r] = arguments[u];
        r++;
      }
      a(t, r);
      return r;
    },
  },
);
