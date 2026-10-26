import n from "./module-A_20.js";
import parseFloat from "./module-s8_19.js";
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
