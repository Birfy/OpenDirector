import n from "./module-A_17.js";
import parseInt_1 from "./module-ZW_16.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
