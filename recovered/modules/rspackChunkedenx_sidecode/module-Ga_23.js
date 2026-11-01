import n from "./module-A_23.js";
import assign from "./module-Eu_23.js";
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
