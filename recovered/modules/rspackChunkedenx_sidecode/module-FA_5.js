import n from "./module-A_5.js";
import exec from "./module-X7_4.js";
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
