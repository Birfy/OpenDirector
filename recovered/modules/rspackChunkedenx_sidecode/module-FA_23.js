import n from "./module-A_23.js";
import exec from "./module-X7_22.js";
n(
  {
    target: "RegExp",
    proto: true,
    forced: /./.exec !== exec,
  },
  {
    exec,
  },
);
