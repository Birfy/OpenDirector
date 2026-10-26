import n from "./module-A_3.js";
import parseFloat from "./module-s8_2.js";
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
