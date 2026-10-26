import n from "./module-A_11.js";
import exec from "./module-X7_10.js";
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
