import n from "./module-A_18.js";
import exec from "./module-X7_17.js";
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
