import n from "./module-A_22.js";
import exec from "./module-X7_21.js";
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
