import n from "./module-g.js";
import parseFloat_1 from "./module-MRE.js";
n(
  {
    global: true,
    forced: parseFloat !== parseFloat_1,
  },
  {
    parseFloat: parseFloat_1,
  },
);
