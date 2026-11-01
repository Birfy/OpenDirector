import n from "./module-A_22.js";
import parseInt from "./module-ZW_21.js";
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
