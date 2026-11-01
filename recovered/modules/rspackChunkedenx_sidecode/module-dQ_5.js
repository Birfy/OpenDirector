import n from "./module-A_5.js";
import parseInt_1 from "./module-ZW_4.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
