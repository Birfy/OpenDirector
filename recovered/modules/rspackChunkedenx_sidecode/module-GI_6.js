import n from "./module-A_7.js";
import parseFloat from "./module-s8_6.js";
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
