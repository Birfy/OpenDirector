import n from "./module-A_14.js";
import assign from "./module-Eu_14.js";
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
