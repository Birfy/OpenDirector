import n from "./module-A_4.js";
import parseInt_1 from "./module-ZW_3.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
