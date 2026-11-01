import n from "./module-A_5.js";
import parseFloat from "./module-s8_4.js";
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
