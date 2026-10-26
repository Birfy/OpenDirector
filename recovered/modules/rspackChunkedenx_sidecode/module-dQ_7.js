import n from "./module-A_7.js";
import parseInt_1 from "./module-ZW_6.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
