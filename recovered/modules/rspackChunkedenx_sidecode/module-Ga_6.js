import n from "./module-A_6.js";
import assign from "./module-Eu_6.js";
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
