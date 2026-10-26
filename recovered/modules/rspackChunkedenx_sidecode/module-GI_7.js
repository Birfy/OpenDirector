import n from "./module-A_8.js";
import parseFloat from "./module-s8_7.js";
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
