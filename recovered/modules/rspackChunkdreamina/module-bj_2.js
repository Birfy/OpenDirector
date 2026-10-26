import n from "./module-g.js";
import parseInt from "./module-jb_2.js";
n(
  {
    target: "Number",
    stat: true,
    forced: Number.parseInt !== parseInt,
  },
  {
    parseInt,
  },
);
