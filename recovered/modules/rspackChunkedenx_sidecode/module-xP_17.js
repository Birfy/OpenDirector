import n from "./module-A_18.js";
import parseInt from "./module-ZW_17.js";
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
