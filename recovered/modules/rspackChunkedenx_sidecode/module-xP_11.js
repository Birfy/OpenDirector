import n from "./module-A_12.js";
import parseInt from "./module-ZW_11.js";
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
