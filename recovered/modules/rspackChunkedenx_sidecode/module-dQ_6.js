import n from "./module-A_6.js";
import parseInt_1 from "./module-ZW_5.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
