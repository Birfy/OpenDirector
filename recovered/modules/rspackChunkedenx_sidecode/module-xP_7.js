import n from "./module-A_8.js";
import parseInt from "./module-ZW_7.js";
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
