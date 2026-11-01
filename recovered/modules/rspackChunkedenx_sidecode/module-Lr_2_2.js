import n from "./module-A_3.js";
import parseFloat_1 from "./module-s8_2.js";
n(
  {
    global: true,
    forced: parseFloat !== parseFloat_1,
  },
  {
    parseFloat: parseFloat_1,
  },
);
