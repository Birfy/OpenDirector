import n from "./module-A_11.js";
import parseInt_1 from "./module-ZW_10.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
