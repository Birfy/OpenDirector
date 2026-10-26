import n from "./module-A_11.js";
import assign from "./module-Eu_11.js";
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
