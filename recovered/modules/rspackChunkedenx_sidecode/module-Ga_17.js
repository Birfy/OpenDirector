import n from "./module-A_17.js";
import assign from "./module-Eu_17.js";
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
