import n from "./module-A_22.js";
import assign from "./module-Eu_22.js";
n(
  {
    target: "Object",
    stat: true,
    arity: 2,
    forced: Object.assign !== assign,
  },
  {
    assign,
  },
);
