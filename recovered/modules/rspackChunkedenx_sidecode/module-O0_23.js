import n from "./module-A_24.js";
import { f } from "./module-Qa_24.js";
import i from "./module-FS_23.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: true,
  },
  {
    try: function (t) {
      const r = f(this);
      const e = i(t);
      (e.error ? r.reject : r.resolve)(e.value);
      return r.promise;
    },
  },
);
