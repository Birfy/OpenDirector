import n from "./module-A_10.js";
import parseInt from "./module-ZW_9.js";
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
