import n from "./module-A_3.js";
import parseInt_1 from "./module-ZW_2.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
