import n from "./module-A_4.js";
import exec from "./module-X7_3.js";
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
