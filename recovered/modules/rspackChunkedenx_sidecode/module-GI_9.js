import n from "./module-A_10.js";
import parseFloat from "./module-s8_9.js";
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
