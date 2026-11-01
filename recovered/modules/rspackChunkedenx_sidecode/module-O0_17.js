import n from "./module-A_18.js";
import { f } from "./module-Qa_18.js";
import i from "./module-FS_17.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: true,
  },
  {
    try: function (r) {
      const t = f(this);
      const e = i(r);
      (e.error ? t.reject : t.resolve)(e.value);
      return t.promise;
    },
  },
);
