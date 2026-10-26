import n from "./module-A_16.js";
import parseInt from "./module-ZW_15.js";
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
