import n from "./module-A_18.js";
import assign from "./module-Eu_18.js";
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
