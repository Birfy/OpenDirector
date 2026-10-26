import $ from "./module-A_13.js";
import parseFloat from "./module-s8_12.js";
$(
  {
    target: "Number",
    stat: true,
    forced: Number.parseFloat !== parseFloat,
  },
  {
    parseFloat,
  },
);
