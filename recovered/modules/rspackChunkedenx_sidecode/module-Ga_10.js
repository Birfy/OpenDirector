import n from "./module-A_10.js";
import assign from "./module-Eu_10.js";
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
