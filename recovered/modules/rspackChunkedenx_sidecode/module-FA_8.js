import n from "./module-A_8.js";
import exec from "./module-X7_7.js";
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
