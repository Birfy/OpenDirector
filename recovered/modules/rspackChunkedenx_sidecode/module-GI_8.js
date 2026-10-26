import n from "./module-A_9.js";
import parseFloat from "./module-s8_8.js";
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
