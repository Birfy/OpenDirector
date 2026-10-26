import n from "./module-A_3.js";
import parseInt from "./module-ZW_2.js";
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
