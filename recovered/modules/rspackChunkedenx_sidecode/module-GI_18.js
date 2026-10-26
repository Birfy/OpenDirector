import n from "./module-A_19.js";
import parseFloat from "./module-s8_18.js";
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
