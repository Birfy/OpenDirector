import n from "./module-A_10.js";
import exec from "./module-X7_9.js";
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
