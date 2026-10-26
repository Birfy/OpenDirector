import n from "./module-A_24.js";
import assign from "./module-Eu_24.js";
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
