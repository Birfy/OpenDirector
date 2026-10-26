import n from "./module-A_22.js";
import parseInt_1 from "./module-ZW_21.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
