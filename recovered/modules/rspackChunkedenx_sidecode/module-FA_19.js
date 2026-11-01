import n from "./module-A_19.js";
import exec from "./module-X7_18.js";
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
