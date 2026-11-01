import n from "./module-A_20.js";
import { f } from "./module-Qa_20.js";
n(
  {
    target: "Promise",
    stat: true,
  },
  {
    withResolvers: function () {
      const r = f(this);
      return {
        promise: r.promise,
        resolve: r.resolve,
        reject: r.reject,
      };
    },
  },
);
