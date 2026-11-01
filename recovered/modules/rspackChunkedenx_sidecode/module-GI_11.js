import n from "./module-A_12.js";
import parseFloat from "./module-s8_11.js";
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
