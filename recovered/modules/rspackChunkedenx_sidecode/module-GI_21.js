import n from "./module-A_22.js";
import parseFloat from "./module-s8_21.js";
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
