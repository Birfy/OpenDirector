import n from "./module-A_3.js";
import assign from "./module-Eu_3.js";
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
