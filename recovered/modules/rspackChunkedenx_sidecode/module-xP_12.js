import $ from "./module-A_13.js";
import parseInt from "./module-ZW_12.js";
$(
  {
    target: "Number",
    stat: true,
    forced: Number.parseInt !== parseInt,
  },
  {
    parseInt,
  },
);
