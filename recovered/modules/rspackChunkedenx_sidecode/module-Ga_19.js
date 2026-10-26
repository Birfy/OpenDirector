import n from "./module-A_19.js";
import assign from "./module-Eu_19.js";
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
