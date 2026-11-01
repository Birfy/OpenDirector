import n from "./module-A_9.js";
import assign from "./module-Eu_9.js";
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
