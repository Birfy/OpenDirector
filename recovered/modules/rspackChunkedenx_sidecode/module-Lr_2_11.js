import n from "./module-A_12.js";
import parseFloat_1 from "./module-s8_11.js";
n(
  {
    global: true,
    forced: parseFloat !== parseFloat_1,
  },
  {
    parseFloat: parseFloat_1,
  },
);
