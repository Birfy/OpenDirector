import n from "./module-A_15.js";
import exec from "./module-X7_14.js";
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
