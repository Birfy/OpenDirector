import n from "./module-A_6.js";
import exec from "./module-X7_5.js";
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
