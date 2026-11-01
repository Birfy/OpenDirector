import n from "./module-A_23.js";
import parseInt_1 from "./module-ZW_22.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
