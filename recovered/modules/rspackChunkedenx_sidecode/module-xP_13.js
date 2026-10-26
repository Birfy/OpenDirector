import n from "./module-A_14.js";
import parseInt from "./module-ZW_13.js";
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
