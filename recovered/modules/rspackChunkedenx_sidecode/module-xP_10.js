import n from "./module-A_11.js";
import parseInt from "./module-ZW_10.js";
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
