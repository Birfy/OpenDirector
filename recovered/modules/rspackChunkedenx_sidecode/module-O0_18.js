import n from "./module-A_19.js";
import { f } from "./module-Qa_19.js";
import i from "./module-FS_18.js";
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
