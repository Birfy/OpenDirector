import $ from "./module-A_13.js";
import parseFloat_1 from "./module-s8_12.js";
$(
  {
    global: true,
    forced: parseFloat !== parseFloat_1,
  },
  {
    parseFloat: parseFloat_1,
  },
);
