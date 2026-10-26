import n from "./module-A.js";
import parseInt from "./module-ZW.js";
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
