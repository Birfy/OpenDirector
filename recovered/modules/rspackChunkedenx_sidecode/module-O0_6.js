import n from "./module-A_7.js";
import { f } from "./module-Qa_7.js";
import a from "./module-FS_6.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: true,
  },
  {
    try: function (t) {
      const r = f(this);
      const e = a(t);
      (e.error ? r.reject : r.resolve)(e.value);
      return r.promise;
    },
  },
);
