import n from "./module-A_15.js";
import assign from "./module-Eu_15.js";
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
