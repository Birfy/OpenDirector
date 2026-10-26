import n from "./module-A_24.js";
import parseInt from "./module-ZW_23.js";
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
