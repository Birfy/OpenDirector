import n from "./module-A_16.js";
import parseFloat from "./module-s8_15.js";
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
