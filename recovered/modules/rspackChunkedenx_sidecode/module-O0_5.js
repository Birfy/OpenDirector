import n from "./module-A_6.js";
import { f } from "./module-Qa_6.js";
import o from "./module-FS_5.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: true,
  },
  {
    try: function (t) {
      const r = f(this);
      const e = o(t);
      (e.error ? r.reject : r.resolve)(e.value);
      return r.promise;
    },
  },
);
