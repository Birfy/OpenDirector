import n from "./module-A_10.js";
import o from "./module-J_10.js";
import i from "./module-HZ_9.js";
n(
  {
    global: true,
  },
  {
    Reflect: {},
  },
);
i(o.Reflect, "Reflect", true);
