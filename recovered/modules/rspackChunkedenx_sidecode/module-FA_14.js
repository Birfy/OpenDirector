import n from "./module-A_14.js";
import exec from "./module-X7_13.js";
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
