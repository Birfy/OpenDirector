import n from "./module-A_5.js";
import parseInt from "./module-ZW_4.js";
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
