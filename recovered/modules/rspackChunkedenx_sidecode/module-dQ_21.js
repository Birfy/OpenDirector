import n from "./module-A_21.js";
import parseInt_1 from "./module-ZW_20.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
