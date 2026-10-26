import n from "./module-A.js";
import parseFloat_1 from "./module-s8.js";
n(
  {
    global: true,
    forced: parseFloat !== parseFloat_1,
  },
  {
    parseFloat: parseFloat_1,
  },
);
