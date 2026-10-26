import n from "./module-A_17.js";
import exec from "./module-X7_16.js";
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
