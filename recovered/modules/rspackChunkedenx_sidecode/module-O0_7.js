import n from "./module-A_8.js";
import { f } from "./module-Qa_8.js";
import i from "./module-FS_7.js";
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
