import n from "./module-A_20.js";
import parseInt_1 from "./module-ZW_19.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
