import n from "./module-A_7.js";
import exec from "./module-X7_6.js";
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
