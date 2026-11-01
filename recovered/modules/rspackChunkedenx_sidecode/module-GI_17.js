import n from "./module-A_18.js";
import parseFloat from "./module-s8_17.js";
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
