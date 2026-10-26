import n from "./module-A_7.js";
import parseInt from "./module-ZW_6.js";
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
