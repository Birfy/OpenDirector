import n from "./module-A_9.js";
import exec from "./module-X7_8.js";
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
