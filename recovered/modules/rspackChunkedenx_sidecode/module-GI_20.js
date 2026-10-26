import n from "./module-A_21.js";
import parseFloat from "./module-s8_20.js";
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
