import n from "./module-A_10.js";
import { f } from "./module-Qa_10.js";
import i from "./module-FS_9.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: true,
  },
  {
    try: function (t) {
      const e = f(this);
      const r = i(t);
      (r.error ? e.reject : e.resolve)(r.value);
      return e.promise;
    },
  },
);
