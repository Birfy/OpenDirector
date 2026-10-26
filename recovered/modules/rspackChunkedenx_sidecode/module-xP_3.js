import n from "./module-A_4.js";
import parseInt from "./module-ZW_3.js";
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
