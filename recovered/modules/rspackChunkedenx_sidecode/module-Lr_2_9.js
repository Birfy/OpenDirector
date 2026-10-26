import n from "./module-A_10.js";
import parseFloat_1 from "./module-s8_9.js";
n(
  {
    global: true,
    forced: parseFloat !== parseFloat_1,
  },
  {
    parseFloat: parseFloat_1,
  },
);
