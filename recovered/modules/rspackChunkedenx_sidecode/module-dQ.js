import n from "./module-A.js";
import parseInt_1 from "./module-ZW.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
