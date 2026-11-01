import n from "./module-A_15.js";
import parseFloat from "./module-s8_14.js";
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
