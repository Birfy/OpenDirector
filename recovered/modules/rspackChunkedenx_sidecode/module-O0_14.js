import n from "./module-A_15.js";
import { f } from "./module-Qa_15.js";
import i from "./module-FS_14.js";
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
