import n from "./module-A_14.js";
import parseFloat from "./module-s8_13.js";
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
