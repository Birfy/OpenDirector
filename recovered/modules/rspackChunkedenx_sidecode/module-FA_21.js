import n from "./module-A_21.js";
import exec from "./module-X7_20.js";
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
