import n from "./module-A_21.js";
import parseInt from "./module-ZW_20.js";
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
