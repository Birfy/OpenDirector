import n from "./module-A_19.js";
import parseInt from "./module-ZW_18.js";
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
