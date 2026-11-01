import n from "./module-A_7.js";
import { f } from "./module-Qa_7.js";
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
