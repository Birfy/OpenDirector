import n from "./module-A_6.js";
import parseFloat from "./module-s8_5.js";
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
