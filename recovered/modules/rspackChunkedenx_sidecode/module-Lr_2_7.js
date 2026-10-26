import n from "./module-A_8.js";
import parseFloat_1 from "./module-s8_7.js";
n(
  {
    global: true,
    forced: parseFloat !== parseFloat_1,
  },
  {
    parseFloat: parseFloat_1,
  },
);
