import n from "./module-A_11.js";
import { f } from "./module-Qa_11.js";
n(
  {
    target: "Promise",
    stat: true,
  },
  {
    withResolvers: function () {
      const t = f(this);
      return {
        promise: t.promise,
        resolve: t.resolve,
        reject: t.reject,
      };
    },
  },
);
