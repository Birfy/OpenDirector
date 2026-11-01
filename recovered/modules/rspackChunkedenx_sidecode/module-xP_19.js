import n from "./module-A_20.js";
import parseInt from "./module-ZW_19.js";
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
