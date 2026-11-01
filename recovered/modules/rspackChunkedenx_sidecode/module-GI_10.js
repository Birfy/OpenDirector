import n from "./module-A_11.js";
import parseFloat from "./module-s8_10.js";
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
