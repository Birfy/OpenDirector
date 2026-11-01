import n from "./module-A_15.js";
import parseInt_1 from "./module-ZW_14.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
