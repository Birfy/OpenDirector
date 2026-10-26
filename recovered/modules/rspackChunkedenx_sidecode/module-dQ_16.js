import n from "./module-A_16.js";
import parseInt_1 from "./module-ZW_15.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
