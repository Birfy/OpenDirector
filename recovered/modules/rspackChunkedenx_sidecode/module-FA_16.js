import n from "./module-A_16.js";
import exec from "./module-X7_15.js";
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
