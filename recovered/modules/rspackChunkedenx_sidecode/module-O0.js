import n from "./module-A.js";
import { f } from "./module-Qa.js";
import i from "./module-FS.js";
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
