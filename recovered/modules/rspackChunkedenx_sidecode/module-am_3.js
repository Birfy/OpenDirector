import n from "./module-A_3.js";
import i from "./module-J_3.js";
import o from "./module-HZ_2.js";
n(
  {
    global: true,
  },
  {
    Reflect: {},
  },
);
o(i.Reflect, "Reflect", true);
