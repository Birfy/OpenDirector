import n from "./module-A_12.js";
import assign from "./module-Eu_12.js";
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
