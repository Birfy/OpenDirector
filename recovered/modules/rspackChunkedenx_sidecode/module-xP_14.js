import n from "./module-A_15.js";
import parseInt from "./module-ZW_14.js";
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
