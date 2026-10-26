import n from "./module-A_24.js";
import parseFloat from "./module-s8_23.js";
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
