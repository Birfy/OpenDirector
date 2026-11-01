import n from "./module-A_23.js";
import parseInt from "./module-ZW_22.js";
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
