import n from "./module-A_6.js";
import parseInt from "./module-ZW_5.js";
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
