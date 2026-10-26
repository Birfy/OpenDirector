import n from "./module-A.js";
import o from "./module-J.js";
import i from "./module-HZ.js";
n(
  {
    global: true,
  },
  {
    Reflect: {},
  },
);
i(o.Reflect, "Reflect", true);
