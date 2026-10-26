import n from "./module-A_20.js";
import exec from "./module-X7_19.js";
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
