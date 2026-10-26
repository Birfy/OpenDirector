import n from "./module-A_17.js";
import parseInt from "./module-ZW_16.js";
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
