import n from "./module-A_8.js";
import assign from "./module-Eu_8.js";
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
