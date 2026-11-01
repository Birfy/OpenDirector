import n from "./module-A_8.js";
import parseInt_1 from "./module-ZW_7.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
