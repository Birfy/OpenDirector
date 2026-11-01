import n from "./module-A_9.js";
import parseInt_1 from "./module-ZW_8.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
