import n from "./module-A_12.js";
import parseInt_1 from "./module-ZW_11.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
