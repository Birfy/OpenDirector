import n from "./module-A_20.js";
import assign from "./module-Eu_20.js";
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
