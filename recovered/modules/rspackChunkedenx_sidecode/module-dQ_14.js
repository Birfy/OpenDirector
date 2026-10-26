import n from "./module-A_14.js";
import parseInt_1 from "./module-ZW_13.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
