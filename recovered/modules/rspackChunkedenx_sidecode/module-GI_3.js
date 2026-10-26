import n from "./module-A_4.js";
import parseFloat from "./module-s8_3.js";
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
