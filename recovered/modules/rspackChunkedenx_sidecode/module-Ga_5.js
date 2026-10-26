import n from "./module-A_5.js";
import assign from "./module-Eu_5.js";
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
