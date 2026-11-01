import $ from "./module-A_13.js";
import { f } from "./module-Qa_13.js";
$(
  {
    target: "Promise",
    stat: true,
  },
  {
    withResolvers: function () {
      const J = f(this);
      return {
        promise: J.promise,
        resolve: J.resolve,
        reject: J.reject,
      };
    },
  },
);
