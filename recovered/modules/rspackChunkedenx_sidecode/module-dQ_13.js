import $ from "./module-A_13.js";
import parseInt_1 from "./module-ZW_12.js";
$(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
