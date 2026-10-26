import n from "./module-A_16.js";
import assign from "./module-Eu_16.js";
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
