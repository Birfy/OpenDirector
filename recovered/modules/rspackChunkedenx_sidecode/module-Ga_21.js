import n from "./module-A_21.js";
import assign from "./module-Eu_21.js";
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
