import $ from "./module-A_13.js";
import exec from "./module-X7_12.js";
$(
  {
    target: "RegExp",
    proto: true,
    forced: /./.exec !== exec,
  },
  {
    exec,
  },
);
