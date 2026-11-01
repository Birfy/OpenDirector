import n from "./module-A_10.js";
import parseInt_1 from "./module-ZW_9.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
