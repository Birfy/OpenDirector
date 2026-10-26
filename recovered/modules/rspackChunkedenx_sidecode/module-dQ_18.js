import n from "./module-A_18.js";
import parseInt_1 from "./module-ZW_17.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
