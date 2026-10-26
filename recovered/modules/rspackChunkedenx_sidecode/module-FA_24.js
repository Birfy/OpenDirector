import n from "./module-A_24.js";
import exec from "./module-X7_23.js";
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
