import n from "./module-A_23.js";
import parseFloat from "./module-s8_22.js";
n(
  {
    target: "Number",
    stat: true,
    forced: Number.parseFloat !== parseFloat,
  },
  {
    parseFloat,
  },
);
