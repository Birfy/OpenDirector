import $ from "./module-A_13.js";
import { f } from "./module-Qa_13.js";
import te from "./module-FS_2_2.js";
$(
  {
    target: "Promise",
    stat: true,
    forced: true,
  },
  {
    try: function (J) {
      const Z = f(this);
      const Q = te(J);
      (Q.error ? Z.reject : Z.resolve)(Q.value);
      return Z.promise;
    },
  },
);
