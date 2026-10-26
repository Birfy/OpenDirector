import n from "./module-g.js";
import parseInt_1 from "./module-jb_2.js";
n(
  {
    global: true,
    forced: parseInt !== parseInt_1,
  },
  {
    parseInt: parseInt_1,
  },
);
