import n from "./module-A_7.js";
import assign from "./module-Eu_7.js";
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
