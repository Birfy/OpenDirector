import n from "./module-A_12.js";
import exec from "./module-X7_11.js";
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
