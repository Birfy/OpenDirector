import n from "./module-A_3.js";
import exec from "./module-X7_2.js";
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
