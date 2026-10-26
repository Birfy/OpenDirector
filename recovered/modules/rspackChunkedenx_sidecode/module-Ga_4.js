import n from "./module-A_4.js";
import assign from "./module-Eu_4.js";
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
