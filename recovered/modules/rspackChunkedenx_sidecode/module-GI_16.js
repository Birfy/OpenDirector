import n from "./module-A_17.js";
import parseFloat from "./module-s8_16.js";
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
