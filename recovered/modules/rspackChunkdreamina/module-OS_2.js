import n from "./module-g.js";
import exec from "./module-Iz_4.js";
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
